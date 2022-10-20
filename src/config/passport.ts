import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import config from './config';
import tokenTypes from './tokens';
import User from '../models/user.model';

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload: { type: any; sub: any; }, done: (arg0: unknown, arg1: boolean) => void) => {
  try {
    if (payload.type !== tokenTypes.tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

export default {
  jwtStrategy,
};
