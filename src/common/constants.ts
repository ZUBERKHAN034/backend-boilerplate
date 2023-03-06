const constants = {
  ENUMS: {
    ORDER: {
      ASC: 'asc',
      DESC: 'desc',
    },
    ROLE: {
      USER: 'user',
      ADMIN: 'admin',
    },
    HASH_TYPES: {
      CREATE_NEW_ACCT: 'CREATE_NEW_ACCT',
      RESET_PASSWORD: 'RESET_PASSWORD',
      UPDATE_EMAIL: 'UPDATE_EMAIL',
      INVITE_EMAIL: 'INVITE_EMAIL',
    },
    USER_LIST_SORT_BY: {
      FULL_NAME: 'fullName',
      EMAIL: 'email',
      COUNTRY: 'country',
      STATE: 'state',
      CITY: 'city',
      LASTACTIVITY: 'lastActivity',
      PLAN: 'plan',
      TYPE: 'type',
    },
    PRODUCT_LIST_SORT_BY: {
      NAME: 'name',
      CATEGORY: 'category',
      PRICE: 'price',
      TAGS: 'tags',
      DATE: 'date',
    },
    REPORT_LIST_SORT_BY: {
      LABEL: 'label',
      VARIANT_TYPE: 'variantType',
      CATEGORY: 'category',
      TAGS: 'tags',
      ISFREE: 'isFree',
    },
    REPORTS_LIST_SORT_BY: {
      FULL_NAME: 'fullName',
      EMAIL: 'email',
      PLAN: 'plan',
      DOWNLOADS: 'downloads',
      RECENT_DOWNLOAD_DATE: 'recentDownloadDate',
    },
    INVOICE_LIST_SORT_BY: {
      DATE: 'date',
      DESCRIPTION: 'description',
      AMOUNT: 'amount',
      STATUS: 'status',
    },
    FILE_FORMAT: {
      PNG: '.png',
      SVG: '.svg',
    },
    LOGIN_TYPE: {
      GOOGLE: 'GOOGLE',
      FACEBOOK: 'FACEBOOK',
      CUSTOM: 'CUSTOM',
    },
    MIME_TYPE: {
      IMAGE: {
        SVG: 'image/svg+xml',
        PNG: 'image/png',
      },
    },
    ACL_TYPE: {
      PUBLIC: 'public-read',
      PRIVATE: 'private',
    },
    HASH_EXPIRES_IN: {
      DEFAULT_EXPIRY: 10,
      INVITE_EXPIRY: 1440,
    },
    CHECKOUT_MODE: {
      PAYMENT: 'payment',
      SUBSCRIPTION: 'subscription',
      SETUP: 'setup',
    },
    USER_STATUS: {
      INVITED: 'invited',
      NONE: null,
    },
    PAYMENT_STATUS: {
      FAILED: 'failed',
      PAID: 'paid',
    },
    PAYMENT_DESCRIPTION: {
      SUBSCRIPTION: 'subscription',
      PURCHASE: 'purchase',
    },
  },

  RESP_ERR_CODES: {
    ERR_400: 400,
    ERR_401: 401,
    ERR_422: 422,
    ERR_500: 500,
    ERR_403: 403,
    ERR_404: 404,
    ERR_405: 405,
    ERR_409: 409,
    ERR_410: 410,
    ERR_412: 412,
  },
  ERROR_MESSAGES: {
    NOT_AUTHORISED: 'You are not authorized',
    USER_NOT_FOUND: 'User not found.',
    USER_ALREAD_EXISTS: 'User already exists',
    INVALID_PASSWORD: 'Invalid Password',
    RECORD_NOT_FOUND: 'Record not found.',
    PASSWORD_NOT_MATCHED: 'Password not matched',
    SAME_OLD_PASSWORD: 'Same as old',
    PRODUCT_NOT_FOUND: 'Product not found',
    NOT_SUBSCRIBED: 'Not subscribed or no active plan',
    ALREADY_SUBSCRIBED: 'Already subscribed to a plan',
    ALREADY_PURCHASED: 'Already purchased',
    SUBSCRIPTION_EXPIRED: 'Subscription expired',
    PRODUCT_IS_ALREADY_DOWNLOADED: 'Product is already downloaded',
    LIMIT_REACHED: 'Limit reached',
    HASH_EXPIRED: 'Hash expired',
    HASH_NOT_FOUND: 'Hash not found',
    ADDRS_NOT_FOUND: 'User billing address not found.',
    SESSIONS_NOT_FOUND: 'Stripe session_id not found.',
    PLAN_NOT_FOUND: 'Plan not found.',
    FORGOT_PASSWORD_REQUEST: `The account currently has no password set. We recommend requesting a 'Forgot Password'.`,
  },
  SUCCESS_MESSAGES: {
    EMAIL_SEND: 'Email send successfully',
    OK: 'OK',
    REGISTERED: 'Registered',
    PASSWORD_CHANGED: 'Password changed',
    PASSWORD_SET: 'Password set successfully',
    PASSWORD_RESET: 'Password reset successfully',
    EMAIL_UPDATED: 'Email updated successfully',
  },
  INS_EXCLUDE_COLS: ['created_at', 'updated_at', 'deleted_at'],
  DB_STATES: [
    {
      value: 0,
      label: 'disconnected',
    },
    {
      value: 1,
      label: 'connected',
    },
    {
      value: 2,
      label: 'connecting',
    },
    {
      value: 3,
      label: 'disconnecting',
    },
  ],
  AWS: {
    BUCKET_PRIVATE: `${process.env.S3_BUCKET_PRIVATE}`,
    BUCKET_PUBLIC: `${process.env.S3_BUCKET_PUBLIC}`,
  },
  ASSET_FOLDER_PATH: {
    PNG: 'png',
    SVG: 'svg',
    USER: 'user',
    OS: 'os',
  },
  PLAN_TYPE: {
    BASIC: 'basic',
    PRO: 'pro',
    ADVANCE: 'advance',
  },
  SENDGRID: {
    SENDER_NAME: 'OpenStroke',
    SENDER_EMAIL: `no-reply@${process.env.SEND_GRID_DOMAIN}`,
  },
};

export default constants;
