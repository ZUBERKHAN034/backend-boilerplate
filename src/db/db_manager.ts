import mongoose from 'mongoose';
import constants from '../common/constants';

interface DBConfig {
  url: string;
  db: string;
  debug: boolean;
}

export class DBManaager {
  public static connection: Promise<any>;
  public static async connect(config: DBConfig) {
    if (mongoose.connection.readyState == 0) {
      mongoose.set('debug', config.debug);
      const url: string = `${config.url}`;
      const dbName = config.db;
      this.connection = mongoose.connect(`${url}${dbName}`);

      const state = Number(mongoose.connection.readyState);
      // eslint-disable-next-line no-console
      console.log('DB Connection : ' + constants.DB_STATES.find((f) => f.value == state).label);
    } else return this.connection;
  }

  public static debug(debug: any) {
    mongoose.set('debug', debug);
  }
}
