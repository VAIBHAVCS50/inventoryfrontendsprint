import {
  __async,
  __export,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-NINA3NFV.js";

// node_modules/@azure/msal-common/dist/utils/Constants.mjs
var Constants = {
  LIBRARY_NAME: "MSAL.JS",
  SKU: "msal.js.common",
  // Prefix for all library cache entries
  CACHE_PREFIX: "msal",
  // default authority
  DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
  DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
  DEFAULT_COMMON_TENANT: "common",
  // ADFS String
  ADFS: "adfs",
  DSTS: "dstsv2",
  // Default AAD Instance Discovery Endpoint
  AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
  // CIAM URL
  CIAM_AUTH_URL: ".ciamlogin.com",
  AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
  // Resource delimiter - used for certain cache entries
  RESOURCE_DELIM: "|",
  // Placeholder for non-existent account ids/objects
  NO_ACCOUNT: "NO_ACCOUNT",
  // Claims
  CLAIMS: "claims",
  // Consumer UTID
  CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
  // Default scopes
  OPENID_SCOPE: "openid",
  PROFILE_SCOPE: "profile",
  OFFLINE_ACCESS_SCOPE: "offline_access",
  EMAIL_SCOPE: "email",
  // Default response type for authorization code flow
  CODE_RESPONSE_TYPE: "code",
  CODE_GRANT_TYPE: "authorization_code",
  RT_GRANT_TYPE: "refresh_token",
  FRAGMENT_RESPONSE_MODE: "fragment",
  S256_CODE_CHALLENGE_METHOD: "S256",
  URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
  AUTHORIZATION_PENDING: "authorization_pending",
  NOT_DEFINED: "not_defined",
  EMPTY_STRING: "",
  NOT_APPLICABLE: "N/A",
  FORWARD_SLASH: "/",
  IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
  IMDS_VERSION: "2020-06-01",
  IMDS_TIMEOUT: 2e3,
  AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
  REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
  KNOWN_PUBLIC_CLOUDS: [
    "login.microsoftonline.com",
    "login.windows.net",
    "login.microsoft.com",
    "sts.windows.net"
  ],
  TOKEN_RESPONSE_TYPE: "token",
  ID_TOKEN_RESPONSE_TYPE: "id_token",
  SHR_NONCE_VALIDITY: 240,
  INVALID_INSTANCE: "invalid_instance"
};
var HttpStatus = {
  SUCCESS: 200,
  SUCCESS_RANGE_START: 200,
  SUCCESS_RANGE_END: 299,
  REDIRECT: 302,
  CLIENT_ERROR: 400,
  CLIENT_ERROR_RANGE_START: 400,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  REQUEST_TIMEOUT: 408,
  TOO_MANY_REQUESTS: 429,
  CLIENT_ERROR_RANGE_END: 499,
  SERVER_ERROR: 500,
  SERVER_ERROR_RANGE_START: 500,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  SERVER_ERROR_RANGE_END: 599,
  MULTI_SIDED_ERROR: 600
};
var OIDC_DEFAULT_SCOPES = [
  Constants.OPENID_SCOPE,
  Constants.PROFILE_SCOPE,
  Constants.OFFLINE_ACCESS_SCOPE
];
var OIDC_SCOPES = [...OIDC_DEFAULT_SCOPES, Constants.EMAIL_SCOPE];
var HeaderNames = {
  CONTENT_TYPE: "Content-Type",
  RETRY_AFTER: "Retry-After",
  CCS_HEADER: "X-AnchorMailbox",
  WWWAuthenticate: "WWW-Authenticate",
  AuthenticationInfo: "Authentication-Info",
  X_MS_REQUEST_ID: "x-ms-request-id",
  X_MS_HTTP_VERSION: "x-ms-httpver"
};
var PersistentCacheKeys = {
  ID_TOKEN: "idtoken",
  CLIENT_INFO: "client.info",
  ADAL_ID_TOKEN: "adal.idtoken",
  ERROR: "error",
  ERROR_DESC: "error.description",
  ACTIVE_ACCOUNT: "active-account",
  ACTIVE_ACCOUNT_FILTERS: "active-account-filters"
  // new cache entry for active_account for a more robust version for browser
};
var AADAuthorityConstants = {
  COMMON: "common",
  ORGANIZATIONS: "organizations",
  CONSUMERS: "consumers"
};
var ClaimsRequestKeys = {
  ACCESS_TOKEN: "access_token",
  XMS_CC: "xms_cc"
};
var PromptValue = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
};
var CodeChallengeMethodValues = {
  PLAIN: "plain",
  S256: "S256"
};
var ServerResponseType = {
  QUERY: "query",
  FRAGMENT: "fragment"
};
var ResponseMode = __spreadProps(__spreadValues({}, ServerResponseType), {
  FORM_POST: "form_post"
});
var GrantType = {
  IMPLICIT_GRANT: "implicit",
  AUTHORIZATION_CODE_GRANT: "authorization_code",
  CLIENT_CREDENTIALS_GRANT: "client_credentials",
  RESOURCE_OWNER_PASSWORD_GRANT: "password",
  REFRESH_TOKEN_GRANT: "refresh_token",
  DEVICE_CODE_GRANT: "device_code",
  JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer"
};
var CacheAccountType = {
  MSSTS_ACCOUNT_TYPE: "MSSTS",
  ADFS_ACCOUNT_TYPE: "ADFS",
  MSAV1_ACCOUNT_TYPE: "MSA",
  GENERIC_ACCOUNT_TYPE: "Generic"
  // NTLM, Kerberos, FBA, Basic etc
};
var Separators = {
  CACHE_KEY_SEPARATOR: "-",
  CLIENT_INFO_SEPARATOR: "."
};
var CredentialType = {
  ID_TOKEN: "IdToken",
  ACCESS_TOKEN: "AccessToken",
  ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme",
  REFRESH_TOKEN: "RefreshToken"
};
var APP_METADATA = "appmetadata";
var CLIENT_INFO = "client_info";
var THE_FAMILY_ID = "1";
var AUTHORITY_METADATA_CONSTANTS = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
};
var AuthorityMetadataSource = {
  CONFIG: "config",
  CACHE: "cache",
  NETWORK: "network",
  HARDCODED_VALUES: "hardcoded_values"
};
var SERVER_TELEM_CONSTANTS = {
  SCHEMA_VERSION: 5,
  MAX_CUR_HEADER_BYTES: 80,
  MAX_LAST_HEADER_BYTES: 330,
  MAX_CACHED_ERRORS: 50,
  CACHE_KEY: "server-telemetry",
  CATEGORY_SEPARATOR: "|",
  VALUE_SEPARATOR: ",",
  OVERFLOW_TRUE: "1",
  OVERFLOW_FALSE: "0",
  UNKNOWN_ERROR: "unknown_error"
};
var AuthenticationScheme = {
  BEARER: "Bearer",
  POP: "pop",
  SSH: "ssh-cert"
};
var ThrottlingConstants = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
};
var Errors = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
};
var PasswordGrantConstants = {
  username: "username",
  password: "password"
};
var ResponseCodes = {
  httpSuccess: 200,
  httpBadRequest: 400
};
var RegionDiscoverySources = {
  FAILED_AUTO_DETECTION: "1",
  INTERNAL_CACHE: "2",
  ENVIRONMENT_VARIABLE: "3",
  IMDS: "4"
};
var RegionDiscoveryOutcomes = {
  CONFIGURED_MATCHES_DETECTED: "1",
  CONFIGURED_NO_AUTO_DETECTION: "2",
  CONFIGURED_NOT_DETECTED: "3",
  AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4",
  AUTO_DETECTION_REQUESTED_FAILED: "5"
};
var CacheOutcome = {
  // When a token is found in the cache or the cache is not supposed to be hit when making the request
  NOT_APPLICABLE: "0",
  // When the token request goes to the identity provider because force_refresh was set to true. Also occurs if claims were requested
  FORCE_REFRESH_OR_CLAIMS: "1",
  // When the token request goes to the identity provider because no cached access token exists
  NO_CACHED_ACCESS_TOKEN: "2",
  // When the token request goes to the identity provider because cached access token expired
  CACHED_ACCESS_TOKEN_EXPIRED: "3",
  // When the token request goes to the identity provider because refresh_in was used and the existing token needs to be refreshed
  PROACTIVELY_REFRESHED: "4"
};
var JsonWebTokenTypes = {
  Jwt: "JWT",
  Jwk: "JWK",
  Pop: "pop"
};
var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;

// node_modules/@azure/msal-common/dist/error/AuthErrorCodes.mjs
var AuthErrorCodes_exports = {};
__export(AuthErrorCodes_exports, {
  postRequestFailed: () => postRequestFailed,
  unexpectedError: () => unexpectedError
});
var unexpectedError = "unexpected_error";
var postRequestFailed = "post_request_failed";

// node_modules/@azure/msal-common/dist/error/AuthError.mjs
var AuthErrorMessages = {
  [unexpectedError]: "Unexpected error in authentication.",
  [postRequestFailed]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
};
var AuthErrorMessage = {
  unexpectedError: {
    code: unexpectedError,
    desc: AuthErrorMessages[unexpectedError]
  },
  postRequestFailed: {
    code: postRequestFailed,
    desc: AuthErrorMessages[postRequestFailed]
  }
};
var AuthError = class _AuthError extends Error {
  constructor(errorCode, errorMessage, suberror) {
    const errorString = errorMessage ? `${errorCode}: ${errorMessage}` : errorCode;
    super(errorString);
    Object.setPrototypeOf(this, _AuthError.prototype);
    this.errorCode = errorCode || Constants.EMPTY_STRING;
    this.errorMessage = errorMessage || Constants.EMPTY_STRING;
    this.subError = suberror || Constants.EMPTY_STRING;
    this.name = "AuthError";
  }
  setCorrelationId(correlationId) {
    this.correlationId = correlationId;
  }
};
function createAuthError(code, additionalMessage) {
  return new AuthError(code, additionalMessage ? `${AuthErrorMessages[code]} ${additionalMessage}` : AuthErrorMessages[code]);
}

// node_modules/@azure/msal-common/dist/error/ClientAuthErrorCodes.mjs
var ClientAuthErrorCodes_exports = {};
__export(ClientAuthErrorCodes_exports, {
  authTimeNotFound: () => authTimeNotFound,
  authorizationCodeMissingFromServerResponse: () => authorizationCodeMissingFromServerResponse,
  bindingKeyNotRemoved: () => bindingKeyNotRemoved,
  cannotAppendScopeSet: () => cannotAppendScopeSet,
  cannotRemoveEmptyScope: () => cannotRemoveEmptyScope,
  clientInfoDecodingError: () => clientInfoDecodingError,
  clientInfoEmptyError: () => clientInfoEmptyError,
  deviceCodeExpired: () => deviceCodeExpired,
  deviceCodePollingCancelled: () => deviceCodePollingCancelled,
  deviceCodeUnknownError: () => deviceCodeUnknownError,
  emptyInputScopeSet: () => emptyInputScopeSet,
  endSessionEndpointNotSupported: () => endSessionEndpointNotSupported,
  endpointResolutionError: () => endpointResolutionError,
  hashNotDeserialized: () => hashNotDeserialized,
  invalidAssertion: () => invalidAssertion,
  invalidCacheEnvironment: () => invalidCacheEnvironment,
  invalidCacheRecord: () => invalidCacheRecord,
  invalidClientCredential: () => invalidClientCredential,
  invalidState: () => invalidState,
  keyIdMissing: () => keyIdMissing,
  maxAgeTranspired: () => maxAgeTranspired,
  methodNotImplemented: () => methodNotImplemented,
  missingTenantIdError: () => missingTenantIdError,
  multipleMatchingAccounts: () => multipleMatchingAccounts,
  multipleMatchingAppMetadata: () => multipleMatchingAppMetadata,
  multipleMatchingTokens: () => multipleMatchingTokens,
  nestedAppAuthBridgeDisabled: () => nestedAppAuthBridgeDisabled,
  networkError: () => networkError,
  noAccountFound: () => noAccountFound,
  noAccountInSilentRequest: () => noAccountInSilentRequest,
  noCryptoObject: () => noCryptoObject,
  noNetworkConnectivity: () => noNetworkConnectivity,
  nonceMismatch: () => nonceMismatch,
  nullOrEmptyToken: () => nullOrEmptyToken,
  openIdConfigError: () => openIdConfigError,
  requestCannotBeMade: () => requestCannotBeMade,
  stateMismatch: () => stateMismatch,
  stateNotFound: () => stateNotFound,
  tokenClaimsCnfRequiredForSignedJwt: () => tokenClaimsCnfRequiredForSignedJwt,
  tokenParsingError: () => tokenParsingError,
  tokenRefreshRequired: () => tokenRefreshRequired,
  unexpectedCredentialType: () => unexpectedCredentialType,
  userCanceled: () => userCanceled,
  userTimeoutReached: () => userTimeoutReached
});
var clientInfoDecodingError = "client_info_decoding_error";
var clientInfoEmptyError = "client_info_empty_error";
var tokenParsingError = "token_parsing_error";
var nullOrEmptyToken = "null_or_empty_token";
var endpointResolutionError = "endpoints_resolution_error";
var networkError = "network_error";
var openIdConfigError = "openid_config_error";
var hashNotDeserialized = "hash_not_deserialized";
var invalidState = "invalid_state";
var stateMismatch = "state_mismatch";
var stateNotFound = "state_not_found";
var nonceMismatch = "nonce_mismatch";
var authTimeNotFound = "auth_time_not_found";
var maxAgeTranspired = "max_age_transpired";
var multipleMatchingTokens = "multiple_matching_tokens";
var multipleMatchingAccounts = "multiple_matching_accounts";
var multipleMatchingAppMetadata = "multiple_matching_appMetadata";
var requestCannotBeMade = "request_cannot_be_made";
var cannotRemoveEmptyScope = "cannot_remove_empty_scope";
var cannotAppendScopeSet = "cannot_append_scopeset";
var emptyInputScopeSet = "empty_input_scopeset";
var deviceCodePollingCancelled = "device_code_polling_cancelled";
var deviceCodeExpired = "device_code_expired";
var deviceCodeUnknownError = "device_code_unknown_error";
var noAccountInSilentRequest = "no_account_in_silent_request";
var invalidCacheRecord = "invalid_cache_record";
var invalidCacheEnvironment = "invalid_cache_environment";
var noAccountFound = "no_account_found";
var noCryptoObject = "no_crypto_object";
var unexpectedCredentialType = "unexpected_credential_type";
var invalidAssertion = "invalid_assertion";
var invalidClientCredential = "invalid_client_credential";
var tokenRefreshRequired = "token_refresh_required";
var userTimeoutReached = "user_timeout_reached";
var tokenClaimsCnfRequiredForSignedJwt = "token_claims_cnf_required_for_signedjwt";
var authorizationCodeMissingFromServerResponse = "authorization_code_missing_from_server_response";
var bindingKeyNotRemoved = "binding_key_not_removed";
var endSessionEndpointNotSupported = "end_session_endpoint_not_supported";
var keyIdMissing = "key_id_missing";
var noNetworkConnectivity = "no_network_connectivity";
var userCanceled = "user_canceled";
var missingTenantIdError = "missing_tenant_id_error";
var methodNotImplemented = "method_not_implemented";
var nestedAppAuthBridgeDisabled = "nested_app_auth_bridge_disabled";

// node_modules/@azure/msal-common/dist/error/ClientAuthError.mjs
var ClientAuthErrorMessages = {
  [clientInfoDecodingError]: "The client info could not be parsed/decoded correctly",
  [clientInfoEmptyError]: "The client info was empty",
  [tokenParsingError]: "Token cannot be parsed",
  [nullOrEmptyToken]: "The token is null or empty",
  [endpointResolutionError]: "Endpoints cannot be resolved",
  [networkError]: "Network request failed",
  [openIdConfigError]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
  [hashNotDeserialized]: "The hash parameters could not be deserialized",
  [invalidState]: "State was not the expected format",
  [stateMismatch]: "State mismatch error",
  [stateNotFound]: "State not found",
  [nonceMismatch]: "Nonce mismatch error",
  [authTimeNotFound]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
  [maxAgeTranspired]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
  [multipleMatchingTokens]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
  [multipleMatchingAccounts]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
  [multipleMatchingAppMetadata]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
  [requestCannotBeMade]: "Token request cannot be made without authorization code or refresh token.",
  [cannotRemoveEmptyScope]: "Cannot remove null or empty scope from ScopeSet",
  [cannotAppendScopeSet]: "Cannot append ScopeSet",
  [emptyInputScopeSet]: "Empty input ScopeSet cannot be processed",
  [deviceCodePollingCancelled]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
  [deviceCodeExpired]: "Device code is expired.",
  [deviceCodeUnknownError]: "Device code stopped polling for unknown reasons.",
  [noAccountInSilentRequest]: "Please pass an account object, silent flow is not supported without account information",
  [invalidCacheRecord]: "Cache record object was null or undefined.",
  [invalidCacheEnvironment]: "Invalid environment when attempting to create cache entry",
  [noAccountFound]: "No account found in cache for given key.",
  [noCryptoObject]: "No crypto object detected.",
  [unexpectedCredentialType]: "Unexpected credential type.",
  [invalidAssertion]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
  [invalidClientCredential]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
  [tokenRefreshRequired]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
  [userTimeoutReached]: "User defined timeout for device code polling reached",
  [tokenClaimsCnfRequiredForSignedJwt]: "Cannot generate a POP jwt if the token_claims are not populated",
  [authorizationCodeMissingFromServerResponse]: "Server response does not contain an authorization code to proceed",
  [bindingKeyNotRemoved]: "Could not remove the credential's binding key from storage.",
  [endSessionEndpointNotSupported]: "The provided authority does not support logout",
  [keyIdMissing]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
  [noNetworkConnectivity]: "No network connectivity. Check your internet connection.",
  [userCanceled]: "User cancelled the flow.",
  [missingTenantIdError]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
  [methodNotImplemented]: "This method has not been implemented",
  [nestedAppAuthBridgeDisabled]: "The nested app auth bridge is disabled"
};
var ClientAuthErrorMessage = {
  clientInfoDecodingError: {
    code: clientInfoDecodingError,
    desc: ClientAuthErrorMessages[clientInfoDecodingError]
  },
  clientInfoEmptyError: {
    code: clientInfoEmptyError,
    desc: ClientAuthErrorMessages[clientInfoEmptyError]
  },
  tokenParsingError: {
    code: tokenParsingError,
    desc: ClientAuthErrorMessages[tokenParsingError]
  },
  nullOrEmptyToken: {
    code: nullOrEmptyToken,
    desc: ClientAuthErrorMessages[nullOrEmptyToken]
  },
  endpointResolutionError: {
    code: endpointResolutionError,
    desc: ClientAuthErrorMessages[endpointResolutionError]
  },
  networkError: {
    code: networkError,
    desc: ClientAuthErrorMessages[networkError]
  },
  unableToGetOpenidConfigError: {
    code: openIdConfigError,
    desc: ClientAuthErrorMessages[openIdConfigError]
  },
  hashNotDeserialized: {
    code: hashNotDeserialized,
    desc: ClientAuthErrorMessages[hashNotDeserialized]
  },
  invalidStateError: {
    code: invalidState,
    desc: ClientAuthErrorMessages[invalidState]
  },
  stateMismatchError: {
    code: stateMismatch,
    desc: ClientAuthErrorMessages[stateMismatch]
  },
  stateNotFoundError: {
    code: stateNotFound,
    desc: ClientAuthErrorMessages[stateNotFound]
  },
  nonceMismatchError: {
    code: nonceMismatch,
    desc: ClientAuthErrorMessages[nonceMismatch]
  },
  authTimeNotFoundError: {
    code: authTimeNotFound,
    desc: ClientAuthErrorMessages[authTimeNotFound]
  },
  maxAgeTranspired: {
    code: maxAgeTranspired,
    desc: ClientAuthErrorMessages[maxAgeTranspired]
  },
  multipleMatchingTokens: {
    code: multipleMatchingTokens,
    desc: ClientAuthErrorMessages[multipleMatchingTokens]
  },
  multipleMatchingAccounts: {
    code: multipleMatchingAccounts,
    desc: ClientAuthErrorMessages[multipleMatchingAccounts]
  },
  multipleMatchingAppMetadata: {
    code: multipleMatchingAppMetadata,
    desc: ClientAuthErrorMessages[multipleMatchingAppMetadata]
  },
  tokenRequestCannotBeMade: {
    code: requestCannotBeMade,
    desc: ClientAuthErrorMessages[requestCannotBeMade]
  },
  removeEmptyScopeError: {
    code: cannotRemoveEmptyScope,
    desc: ClientAuthErrorMessages[cannotRemoveEmptyScope]
  },
  appendScopeSetError: {
    code: cannotAppendScopeSet,
    desc: ClientAuthErrorMessages[cannotAppendScopeSet]
  },
  emptyInputScopeSetError: {
    code: emptyInputScopeSet,
    desc: ClientAuthErrorMessages[emptyInputScopeSet]
  },
  DeviceCodePollingCancelled: {
    code: deviceCodePollingCancelled,
    desc: ClientAuthErrorMessages[deviceCodePollingCancelled]
  },
  DeviceCodeExpired: {
    code: deviceCodeExpired,
    desc: ClientAuthErrorMessages[deviceCodeExpired]
  },
  DeviceCodeUnknownError: {
    code: deviceCodeUnknownError,
    desc: ClientAuthErrorMessages[deviceCodeUnknownError]
  },
  NoAccountInSilentRequest: {
    code: noAccountInSilentRequest,
    desc: ClientAuthErrorMessages[noAccountInSilentRequest]
  },
  invalidCacheRecord: {
    code: invalidCacheRecord,
    desc: ClientAuthErrorMessages[invalidCacheRecord]
  },
  invalidCacheEnvironment: {
    code: invalidCacheEnvironment,
    desc: ClientAuthErrorMessages[invalidCacheEnvironment]
  },
  noAccountFound: {
    code: noAccountFound,
    desc: ClientAuthErrorMessages[noAccountFound]
  },
  noCryptoObj: {
    code: noCryptoObject,
    desc: ClientAuthErrorMessages[noCryptoObject]
  },
  unexpectedCredentialType: {
    code: unexpectedCredentialType,
    desc: ClientAuthErrorMessages[unexpectedCredentialType]
  },
  invalidAssertion: {
    code: invalidAssertion,
    desc: ClientAuthErrorMessages[invalidAssertion]
  },
  invalidClientCredential: {
    code: invalidClientCredential,
    desc: ClientAuthErrorMessages[invalidClientCredential]
  },
  tokenRefreshRequired: {
    code: tokenRefreshRequired,
    desc: ClientAuthErrorMessages[tokenRefreshRequired]
  },
  userTimeoutReached: {
    code: userTimeoutReached,
    desc: ClientAuthErrorMessages[userTimeoutReached]
  },
  tokenClaimsRequired: {
    code: tokenClaimsCnfRequiredForSignedJwt,
    desc: ClientAuthErrorMessages[tokenClaimsCnfRequiredForSignedJwt]
  },
  noAuthorizationCodeFromServer: {
    code: authorizationCodeMissingFromServerResponse,
    desc: ClientAuthErrorMessages[authorizationCodeMissingFromServerResponse]
  },
  bindingKeyNotRemovedError: {
    code: bindingKeyNotRemoved,
    desc: ClientAuthErrorMessages[bindingKeyNotRemoved]
  },
  logoutNotSupported: {
    code: endSessionEndpointNotSupported,
    desc: ClientAuthErrorMessages[endSessionEndpointNotSupported]
  },
  keyIdMissing: {
    code: keyIdMissing,
    desc: ClientAuthErrorMessages[keyIdMissing]
  },
  noNetworkConnectivity: {
    code: noNetworkConnectivity,
    desc: ClientAuthErrorMessages[noNetworkConnectivity]
  },
  userCanceledError: {
    code: userCanceled,
    desc: ClientAuthErrorMessages[userCanceled]
  },
  missingTenantIdError: {
    code: missingTenantIdError,
    desc: ClientAuthErrorMessages[missingTenantIdError]
  },
  nestedAppAuthBridgeDisabled: {
    code: nestedAppAuthBridgeDisabled,
    desc: ClientAuthErrorMessages[nestedAppAuthBridgeDisabled]
  }
};
var ClientAuthError = class _ClientAuthError extends AuthError {
  constructor(errorCode, additionalMessage) {
    super(errorCode, additionalMessage ? `${ClientAuthErrorMessages[errorCode]}: ${additionalMessage}` : ClientAuthErrorMessages[errorCode]);
    this.name = "ClientAuthError";
    Object.setPrototypeOf(this, _ClientAuthError.prototype);
  }
};
function createClientAuthError(errorCode, additionalMessage) {
  return new ClientAuthError(errorCode, additionalMessage);
}

// node_modules/@azure/msal-common/dist/crypto/ICrypto.mjs
var DEFAULT_CRYPTO_IMPLEMENTATION = {
  createNewGuid: () => {
    throw createClientAuthError(methodNotImplemented);
  },
  base64Decode: () => {
    throw createClientAuthError(methodNotImplemented);
  },
  base64Encode: () => {
    throw createClientAuthError(methodNotImplemented);
  },
  getPublicKeyThumbprint() {
    return __async(this, null, function* () {
      throw createClientAuthError(methodNotImplemented);
    });
  },
  removeTokenBindingKey() {
    return __async(this, null, function* () {
      throw createClientAuthError(methodNotImplemented);
    });
  },
  clearKeystore() {
    return __async(this, null, function* () {
      throw createClientAuthError(methodNotImplemented);
    });
  },
  signJwt() {
    return __async(this, null, function* () {
      throw createClientAuthError(methodNotImplemented);
    });
  },
  hashString() {
    return __async(this, null, function* () {
      throw createClientAuthError(methodNotImplemented);
    });
  }
};

// node_modules/@azure/msal-common/dist/logger/Logger.mjs
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["Error"] = 0] = "Error";
  LogLevel2[LogLevel2["Warning"] = 1] = "Warning";
  LogLevel2[LogLevel2["Info"] = 2] = "Info";
  LogLevel2[LogLevel2["Verbose"] = 3] = "Verbose";
  LogLevel2[LogLevel2["Trace"] = 4] = "Trace";
})(LogLevel || (LogLevel = {}));
var Logger = class _Logger {
  constructor(loggerOptions, packageName, packageVersion) {
    this.level = LogLevel.Info;
    const defaultLoggerCallback = () => {
      return;
    };
    const setLoggerOptions = loggerOptions || _Logger.createDefaultLoggerOptions();
    this.localCallback = setLoggerOptions.loggerCallback || defaultLoggerCallback;
    this.piiLoggingEnabled = setLoggerOptions.piiLoggingEnabled || false;
    this.level = typeof setLoggerOptions.logLevel === "number" ? setLoggerOptions.logLevel : LogLevel.Info;
    this.correlationId = setLoggerOptions.correlationId || Constants.EMPTY_STRING;
    this.packageName = packageName || Constants.EMPTY_STRING;
    this.packageVersion = packageVersion || Constants.EMPTY_STRING;
  }
  static createDefaultLoggerOptions() {
    return {
      loggerCallback: () => {
      },
      piiLoggingEnabled: false,
      logLevel: LogLevel.Info
    };
  }
  /**
   * Create new Logger with existing configurations.
   */
  clone(packageName, packageVersion, correlationId) {
    return new _Logger({
      loggerCallback: this.localCallback,
      piiLoggingEnabled: this.piiLoggingEnabled,
      logLevel: this.level,
      correlationId: correlationId || this.correlationId
    }, packageName, packageVersion);
  }
  /**
   * Log message with required options.
   */
  logMessage(logMessage, options) {
    if (options.logLevel > this.level || !this.piiLoggingEnabled && options.containsPii) {
      return;
    }
    const timestamp = (/* @__PURE__ */ new Date()).toUTCString();
    const logHeader = `[${timestamp}] : [${options.correlationId || this.correlationId || ""}]`;
    const log = `${logHeader} : ${this.packageName}@${this.packageVersion} : ${LogLevel[options.logLevel]} - ${logMessage}`;
    this.executeCallback(options.logLevel, log, options.containsPii || false);
  }
  /**
   * Execute callback with message.
   */
  executeCallback(level, message, containsPii) {
    if (this.localCallback) {
      this.localCallback(level, message, containsPii);
    }
  }
  /**
   * Logs error messages.
   */
  error(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Error,
      containsPii: false,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  }
  /**
   * Logs error messages with PII.
   */
  errorPii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Error,
      containsPii: true,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  }
  /**
   * Logs warning messages.
   */
  warning(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Warning,
      containsPii: false,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  }
  /**
   * Logs warning messages with PII.
   */
  warningPii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Warning,
      containsPii: true,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  }
  /**
   * Logs info messages.
   */
  info(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Info,
      containsPii: false,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  }
  /**
   * Logs info messages with PII.
   */
  infoPii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Info,
      containsPii: true,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  }
  /**
   * Logs verbose messages.
   */
  verbose(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Verbose,
      containsPii: false,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  }
  /**
   * Logs verbose messages with PII.
   */
  verbosePii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Verbose,
      containsPii: true,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  }
  /**
   * Logs trace messages.
   */
  trace(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Trace,
      containsPii: false,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  }
  /**
   * Logs trace messages with PII.
   */
  tracePii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Trace,
      containsPii: true,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  }
  /**
   * Returns whether PII Logging is enabled or not.
   */
  isPiiLoggingEnabled() {
    return this.piiLoggingEnabled || false;
  }
};

// node_modules/@azure/msal-common/dist/authority/AuthorityOptions.mjs
var AzureCloudInstance = {
  // AzureCloudInstance is not specified.
  None: "none",
  // Microsoft Azure public cloud
  AzurePublic: "https://login.microsoftonline.com",
  // Microsoft PPE
  AzurePpe: "https://login.windows-ppe.net",
  // Microsoft Chinese national/regional cloud
  AzureChina: "https://login.chinacloudapi.cn",
  // Microsoft German national/regional cloud ("Black Forest")
  AzureGermany: "https://login.microsoftonline.de",
  // US Government cloud
  AzureUsGovernment: "https://login.microsoftonline.us"
};

// node_modules/@azure/msal-common/dist/utils/TimeUtils.mjs
var TimeUtils_exports = {};
__export(TimeUtils_exports, {
  delay: () => delay,
  isTokenExpired: () => isTokenExpired,
  nowSeconds: () => nowSeconds,
  wasClockTurnedBack: () => wasClockTurnedBack
});
function nowSeconds() {
  return Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
}
function isTokenExpired(expiresOn, offset) {
  const expirationSec = Number(expiresOn) || 0;
  const offsetCurrentTimeSec = nowSeconds() + offset;
  return offsetCurrentTimeSec > expirationSec;
}
function wasClockTurnedBack(cachedAt) {
  const cachedAtSec = Number(cachedAt);
  return cachedAtSec > nowSeconds();
}
function delay(t, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), t));
}

// node_modules/@azure/msal-common/dist/error/ClientConfigurationErrorCodes.mjs
var ClientConfigurationErrorCodes_exports = {};
__export(ClientConfigurationErrorCodes_exports, {
  authorityMismatch: () => authorityMismatch,
  authorityUriInsecure: () => authorityUriInsecure,
  cannotAllowNativeBroker: () => cannotAllowNativeBroker,
  cannotSetOIDCOptions: () => cannotSetOIDCOptions,
  claimsRequestParsingError: () => claimsRequestParsingError,
  emptyInputScopesError: () => emptyInputScopesError,
  invalidAuthenticationHeader: () => invalidAuthenticationHeader,
  invalidAuthorityMetadata: () => invalidAuthorityMetadata,
  invalidClaims: () => invalidClaims,
  invalidCloudDiscoveryMetadata: () => invalidCloudDiscoveryMetadata,
  invalidCodeChallengeMethod: () => invalidCodeChallengeMethod,
  invalidPromptValue: () => invalidPromptValue,
  logoutRequestEmpty: () => logoutRequestEmpty,
  missingNonceAuthenticationHeader: () => missingNonceAuthenticationHeader,
  missingSshJwk: () => missingSshJwk,
  missingSshKid: () => missingSshKid,
  pkceParamsMissing: () => pkceParamsMissing,
  redirectUriEmpty: () => redirectUriEmpty,
  tokenRequestEmpty: () => tokenRequestEmpty,
  untrustedAuthority: () => untrustedAuthority,
  urlEmptyError: () => urlEmptyError,
  urlParseError: () => urlParseError
});
var redirectUriEmpty = "redirect_uri_empty";
var claimsRequestParsingError = "claims_request_parsing_error";
var authorityUriInsecure = "authority_uri_insecure";
var urlParseError = "url_parse_error";
var urlEmptyError = "empty_url_error";
var emptyInputScopesError = "empty_input_scopes_error";
var invalidPromptValue = "invalid_prompt_value";
var invalidClaims = "invalid_claims";
var tokenRequestEmpty = "token_request_empty";
var logoutRequestEmpty = "logout_request_empty";
var invalidCodeChallengeMethod = "invalid_code_challenge_method";
var pkceParamsMissing = "pkce_params_missing";
var invalidCloudDiscoveryMetadata = "invalid_cloud_discovery_metadata";
var invalidAuthorityMetadata = "invalid_authority_metadata";
var untrustedAuthority = "untrusted_authority";
var missingSshJwk = "missing_ssh_jwk";
var missingSshKid = "missing_ssh_kid";
var missingNonceAuthenticationHeader = "missing_nonce_authentication_header";
var invalidAuthenticationHeader = "invalid_authentication_header";
var cannotSetOIDCOptions = "cannot_set_OIDCOptions";
var cannotAllowNativeBroker = "cannot_allow_native_broker";
var authorityMismatch = "authority_mismatch";

// node_modules/@azure/msal-common/dist/error/ClientConfigurationError.mjs
var ClientConfigurationErrorMessages = {
  [redirectUriEmpty]: "A redirect URI is required for all calls, and none has been set.",
  [claimsRequestParsingError]: "Could not parse the given claims request object.",
  [authorityUriInsecure]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
  [urlParseError]: "URL could not be parsed into appropriate segments.",
  [urlEmptyError]: "URL was empty or null.",
  [emptyInputScopesError]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
  [invalidPromptValue]: "Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest",
  [invalidClaims]: "Given claims parameter must be a stringified JSON object.",
  [tokenRequestEmpty]: "Token request was empty and not found in cache.",
  [logoutRequestEmpty]: "The logout request was null or undefined.",
  [invalidCodeChallengeMethod]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
  [pkceParamsMissing]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
  [invalidCloudDiscoveryMetadata]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
  [invalidAuthorityMetadata]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
  [untrustedAuthority]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
  [missingSshJwk]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
  [missingSshKid]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
  [missingNonceAuthenticationHeader]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
  [invalidAuthenticationHeader]: "Invalid authentication header provided",
  [cannotSetOIDCOptions]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
  [cannotAllowNativeBroker]: "Cannot set allowNativeBroker parameter to true when not in AAD protocol mode.",
  [authorityMismatch]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority."
};
var ClientConfigurationErrorMessage = {
  redirectUriNotSet: {
    code: redirectUriEmpty,
    desc: ClientConfigurationErrorMessages[redirectUriEmpty]
  },
  claimsRequestParsingError: {
    code: claimsRequestParsingError,
    desc: ClientConfigurationErrorMessages[claimsRequestParsingError]
  },
  authorityUriInsecure: {
    code: authorityUriInsecure,
    desc: ClientConfigurationErrorMessages[authorityUriInsecure]
  },
  urlParseError: {
    code: urlParseError,
    desc: ClientConfigurationErrorMessages[urlParseError]
  },
  urlEmptyError: {
    code: urlEmptyError,
    desc: ClientConfigurationErrorMessages[urlEmptyError]
  },
  emptyScopesError: {
    code: emptyInputScopesError,
    desc: ClientConfigurationErrorMessages[emptyInputScopesError]
  },
  invalidPrompt: {
    code: invalidPromptValue,
    desc: ClientConfigurationErrorMessages[invalidPromptValue]
  },
  invalidClaimsRequest: {
    code: invalidClaims,
    desc: ClientConfigurationErrorMessages[invalidClaims]
  },
  tokenRequestEmptyError: {
    code: tokenRequestEmpty,
    desc: ClientConfigurationErrorMessages[tokenRequestEmpty]
  },
  logoutRequestEmptyError: {
    code: logoutRequestEmpty,
    desc: ClientConfigurationErrorMessages[logoutRequestEmpty]
  },
  invalidCodeChallengeMethod: {
    code: invalidCodeChallengeMethod,
    desc: ClientConfigurationErrorMessages[invalidCodeChallengeMethod]
  },
  invalidCodeChallengeParams: {
    code: pkceParamsMissing,
    desc: ClientConfigurationErrorMessages[pkceParamsMissing]
  },
  invalidCloudDiscoveryMetadata: {
    code: invalidCloudDiscoveryMetadata,
    desc: ClientConfigurationErrorMessages[invalidCloudDiscoveryMetadata]
  },
  invalidAuthorityMetadata: {
    code: invalidAuthorityMetadata,
    desc: ClientConfigurationErrorMessages[invalidAuthorityMetadata]
  },
  untrustedAuthority: {
    code: untrustedAuthority,
    desc: ClientConfigurationErrorMessages[untrustedAuthority]
  },
  missingSshJwk: {
    code: missingSshJwk,
    desc: ClientConfigurationErrorMessages[missingSshJwk]
  },
  missingSshKid: {
    code: missingSshKid,
    desc: ClientConfigurationErrorMessages[missingSshKid]
  },
  missingNonceAuthenticationHeader: {
    code: missingNonceAuthenticationHeader,
    desc: ClientConfigurationErrorMessages[missingNonceAuthenticationHeader]
  },
  invalidAuthenticationHeader: {
    code: invalidAuthenticationHeader,
    desc: ClientConfigurationErrorMessages[invalidAuthenticationHeader]
  },
  cannotSetOIDCOptions: {
    code: cannotSetOIDCOptions,
    desc: ClientConfigurationErrorMessages[cannotSetOIDCOptions]
  },
  cannotAllowNativeBroker: {
    code: cannotAllowNativeBroker,
    desc: ClientConfigurationErrorMessages[cannotAllowNativeBroker]
  },
  authorityMismatch: {
    code: authorityMismatch,
    desc: ClientConfigurationErrorMessages[authorityMismatch]
  }
};
var ClientConfigurationError = class _ClientConfigurationError extends AuthError {
  constructor(errorCode) {
    super(errorCode, ClientConfigurationErrorMessages[errorCode]);
    this.name = "ClientConfigurationError";
    Object.setPrototypeOf(this, _ClientConfigurationError.prototype);
  }
};
function createClientConfigurationError(errorCode) {
  return new ClientConfigurationError(errorCode);
}

// node_modules/@azure/msal-common/dist/utils/StringUtils.mjs
var StringUtils = class {
  /**
   * Check if stringified object is empty
   * @param strObj
   */
  static isEmptyObj(strObj) {
    if (strObj) {
      try {
        const obj = JSON.parse(strObj);
        return Object.keys(obj).length === 0;
      } catch (e) {
      }
    }
    return true;
  }
  static startsWith(str, search) {
    return str.indexOf(search) === 0;
  }
  static endsWith(str, search) {
    return str.length >= search.length && str.lastIndexOf(search) === str.length - search.length;
  }
  /**
   * Parses string into an object.
   *
   * @param query
   */
  static queryStringToObject(query) {
    const obj = {};
    const params = query.split("&");
    const decode = (s) => decodeURIComponent(s.replace(/\+/g, " "));
    params.forEach((pair) => {
      if (pair.trim()) {
        const [key, value] = pair.split(/=(.+)/g, 2);
        if (key && value) {
          obj[decode(key)] = decode(value);
        }
      }
    });
    return obj;
  }
  /**
   * Trims entries in an array.
   *
   * @param arr
   */
  static trimArrayEntries(arr) {
    return arr.map((entry) => entry.trim());
  }
  /**
   * Removes empty strings from array
   * @param arr
   */
  static removeEmptyStringsFromArray(arr) {
    return arr.filter((entry) => {
      return !!entry;
    });
  }
  /**
   * Attempts to parse a string into JSON
   * @param str
   */
  static jsonParseHelper(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return null;
    }
  }
  /**
   * Tests if a given string matches a given pattern, with support for wildcards and queries.
   * @param pattern Wildcard pattern to string match. Supports "*" for wildcards and "?" for queries
   * @param input String to match against
   */
  static matchPattern(pattern, input) {
    const regex = new RegExp(pattern.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?"));
    return regex.test(input);
  }
};

// node_modules/@azure/msal-common/dist/authority/ProtocolMode.mjs
var ProtocolMode = {
  AAD: "AAD",
  OIDC: "OIDC"
};

// node_modules/@azure/msal-common/dist/account/ClientInfo.mjs
function buildClientInfo(rawClientInfo, base64Decode2) {
  if (!rawClientInfo) {
    throw createClientAuthError(clientInfoEmptyError);
  }
  try {
    const decodedClientInfo = base64Decode2(rawClientInfo);
    return JSON.parse(decodedClientInfo);
  } catch (e) {
    throw createClientAuthError(clientInfoDecodingError);
  }
}
function buildClientInfoFromHomeAccountId(homeAccountId) {
  if (!homeAccountId) {
    throw createClientAuthError(clientInfoDecodingError);
  }
  const clientInfoParts = homeAccountId.split(Separators.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: clientInfoParts[0],
    utid: clientInfoParts.length < 2 ? Constants.EMPTY_STRING : clientInfoParts[1]
  };
}

// node_modules/@azure/msal-common/dist/account/AccountInfo.mjs
function tenantIdMatchesHomeTenant(tenantId, homeAccountId) {
  return !!tenantId && !!homeAccountId && tenantId === homeAccountId.split(".")[1];
}
function buildTenantProfileFromIdTokenClaims(homeAccountId, idTokenClaims) {
  const { oid, sub, tid, name: name2, tfp, acr } = idTokenClaims;
  const tenantId = tid || tfp || acr || "";
  return {
    tenantId,
    localAccountId: oid || sub || "",
    name: name2,
    isHomeTenant: tenantIdMatchesHomeTenant(tenantId, homeAccountId)
  };
}
function updateAccountTenantProfileData(baseAccountInfo, tenantProfile, idTokenClaims, idTokenSecret) {
  let updatedAccountInfo = baseAccountInfo;
  if (tenantProfile) {
    const _a = tenantProfile, { isHomeTenant } = _a, tenantProfileOverride = __objRest(_a, ["isHomeTenant"]);
    updatedAccountInfo = __spreadValues(__spreadValues({}, baseAccountInfo), tenantProfileOverride);
  }
  if (idTokenClaims) {
    const _b = buildTenantProfileFromIdTokenClaims(baseAccountInfo.homeAccountId, idTokenClaims), { isHomeTenant } = _b, claimsSourcedTenantProfile = __objRest(_b, ["isHomeTenant"]);
    updatedAccountInfo = __spreadProps(__spreadValues(__spreadValues({}, updatedAccountInfo), claimsSourcedTenantProfile), {
      idTokenClaims,
      idToken: idTokenSecret
    });
    return updatedAccountInfo;
  }
  return updatedAccountInfo;
}

// node_modules/@azure/msal-common/dist/authority/AuthorityType.mjs
var AuthorityType = {
  Default: 0,
  Adfs: 1,
  Dsts: 2,
  Ciam: 3
};

// node_modules/@azure/msal-common/dist/account/TokenClaims.mjs
function getTenantIdFromIdTokenClaims(idTokenClaims) {
  if (idTokenClaims) {
    const tenantId = idTokenClaims.tid || idTokenClaims.tfp || idTokenClaims.acr;
    return tenantId || null;
  }
  return null;
}

// node_modules/@azure/msal-common/dist/cache/entities/AccountEntity.mjs
var AccountEntity = class _AccountEntity {
  /**
   * Generate Account Id key component as per the schema: <home_account_id>-<environment>
   */
  generateAccountId() {
    const accountId = [this.homeAccountId, this.environment];
    return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
  }
  /**
   * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
   */
  generateAccountKey() {
    return _AccountEntity.generateAccountCacheKey({
      homeAccountId: this.homeAccountId,
      environment: this.environment,
      tenantId: this.realm,
      username: this.username,
      localAccountId: this.localAccountId
    });
  }
  /**
   * Returns the AccountInfo interface for this account.
   */
  getAccountInfo() {
    return {
      homeAccountId: this.homeAccountId,
      environment: this.environment,
      tenantId: this.realm,
      username: this.username,
      localAccountId: this.localAccountId,
      name: this.name,
      nativeAccountId: this.nativeAccountId,
      authorityType: this.authorityType,
      // Deserialize tenant profiles array into a Map
      tenantProfiles: new Map((this.tenantProfiles || []).map((tenantProfile) => {
        return [tenantProfile.tenantId, tenantProfile];
      }))
    };
  }
  /**
   * Returns true if the account entity is in single tenant format (outdated), false otherwise
   */
  isSingleTenant() {
    return !this.tenantProfiles;
  }
  /**
   * Generates account key from interface
   * @param accountInterface
   */
  static generateAccountCacheKey(accountInterface) {
    const homeTenantId = accountInterface.homeAccountId.split(".")[1];
    const accountKey = [
      accountInterface.homeAccountId,
      accountInterface.environment || "",
      homeTenantId || accountInterface.tenantId || ""
    ];
    return accountKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
  }
  /**
   * Build Account cache from IdToken, clientInfo and authority/policy. Associated with AAD.
   * @param accountDetails
   */
  static createAccount(accountDetails, authority, base64Decode2) {
    const account = new _AccountEntity();
    if (authority.authorityType === AuthorityType.Adfs) {
      account.authorityType = CacheAccountType.ADFS_ACCOUNT_TYPE;
    } else if (authority.protocolMode === ProtocolMode.AAD) {
      account.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
    } else {
      account.authorityType = CacheAccountType.GENERIC_ACCOUNT_TYPE;
    }
    let clientInfo;
    if (accountDetails.clientInfo && base64Decode2) {
      clientInfo = buildClientInfo(accountDetails.clientInfo, base64Decode2);
    }
    account.clientInfo = accountDetails.clientInfo;
    account.homeAccountId = accountDetails.homeAccountId;
    account.nativeAccountId = accountDetails.nativeAccountId;
    const env = accountDetails.environment || authority && authority.getPreferredCache();
    if (!env) {
      throw createClientAuthError(invalidCacheEnvironment);
    }
    account.environment = env;
    account.realm = clientInfo?.utid || getTenantIdFromIdTokenClaims(accountDetails.idTokenClaims) || "";
    account.localAccountId = clientInfo?.uid || accountDetails.idTokenClaims.oid || accountDetails.idTokenClaims.sub || "";
    const preferredUsername = accountDetails.idTokenClaims.preferred_username || accountDetails.idTokenClaims.upn;
    const email = accountDetails.idTokenClaims.emails ? accountDetails.idTokenClaims.emails[0] : null;
    account.username = preferredUsername || email || "";
    account.name = accountDetails.idTokenClaims.name;
    account.cloudGraphHostName = accountDetails.cloudGraphHostName;
    account.msGraphHost = accountDetails.msGraphHost;
    if (accountDetails.tenantProfiles) {
      account.tenantProfiles = accountDetails.tenantProfiles;
    } else {
      const tenantProfiles = [];
      if (accountDetails.idTokenClaims) {
        const tenantProfile = buildTenantProfileFromIdTokenClaims(accountDetails.homeAccountId, accountDetails.idTokenClaims);
        tenantProfiles.push(tenantProfile);
      }
      account.tenantProfiles = tenantProfiles;
    }
    return account;
  }
  /**
   * Creates an AccountEntity object from AccountInfo
   * @param accountInfo
   * @param cloudGraphHostName
   * @param msGraphHost
   * @returns
   */
  static createFromAccountInfo(accountInfo, cloudGraphHostName, msGraphHost) {
    const account = new _AccountEntity();
    account.authorityType = accountInfo.authorityType || CacheAccountType.GENERIC_ACCOUNT_TYPE;
    account.homeAccountId = accountInfo.homeAccountId;
    account.localAccountId = accountInfo.localAccountId;
    account.nativeAccountId = accountInfo.nativeAccountId;
    account.realm = accountInfo.tenantId;
    account.environment = accountInfo.environment;
    account.username = accountInfo.username;
    account.name = accountInfo.name;
    account.cloudGraphHostName = cloudGraphHostName;
    account.msGraphHost = msGraphHost;
    account.tenantProfiles = Array.from(accountInfo.tenantProfiles?.values() || []);
    return account;
  }
  /**
   * Generate HomeAccountId from server response
   * @param serverClientInfo
   * @param authType
   */
  static generateHomeAccountId(serverClientInfo, authType, logger, cryptoObj, idTokenClaims) {
    if (!(authType === AuthorityType.Adfs || authType === AuthorityType.Dsts)) {
      if (serverClientInfo) {
        try {
          const clientInfo = buildClientInfo(serverClientInfo, cryptoObj.base64Decode);
          if (clientInfo.uid && clientInfo.utid) {
            return `${clientInfo.uid}.${clientInfo.utid}`;
          }
        } catch (e) {
        }
      }
      logger.warning("No client info in response");
    }
    return idTokenClaims?.sub || "";
  }
  /**
   * Validates an entity: checks for all expected params
   * @param entity
   */
  static isAccountEntity(entity) {
    if (!entity) {
      return false;
    }
    return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("realm") && entity.hasOwnProperty("localAccountId") && entity.hasOwnProperty("username") && entity.hasOwnProperty("authorityType");
  }
  /**
   * Helper function to determine whether 2 accountInfo objects represent the same account
   * @param accountA
   * @param accountB
   * @param compareClaims - If set to true idTokenClaims will also be compared to determine account equality
   */
  static accountInfoIsEqual(accountA, accountB, compareClaims) {
    if (!accountA || !accountB) {
      return false;
    }
    let claimsMatch = true;
    if (compareClaims) {
      const accountAClaims = accountA.idTokenClaims || {};
      const accountBClaims = accountB.idTokenClaims || {};
      claimsMatch = accountAClaims.iat === accountBClaims.iat && accountAClaims.nonce === accountBClaims.nonce;
    }
    return accountA.homeAccountId === accountB.homeAccountId && accountA.localAccountId === accountB.localAccountId && accountA.username === accountB.username && accountA.tenantId === accountB.tenantId && accountA.environment === accountB.environment && accountA.nativeAccountId === accountB.nativeAccountId && claimsMatch;
  }
};

// node_modules/@azure/msal-common/dist/utils/UrlUtils.mjs
var UrlUtils_exports = {};
__export(UrlUtils_exports, {
  getDeserializedResponse: () => getDeserializedResponse,
  stripLeadingHashOrQuery: () => stripLeadingHashOrQuery
});
function stripLeadingHashOrQuery(responseString) {
  if (responseString.startsWith("#/")) {
    return responseString.substring(2);
  } else if (responseString.startsWith("#") || responseString.startsWith("?")) {
    return responseString.substring(1);
  }
  return responseString;
}
function getDeserializedResponse(responseString) {
  if (!responseString || responseString.indexOf("=") < 0) {
    return null;
  }
  try {
    const normalizedResponse = stripLeadingHashOrQuery(responseString);
    const deserializedHash = Object.fromEntries(new URLSearchParams(normalizedResponse));
    if (deserializedHash.code || deserializedHash.error || deserializedHash.error_description || deserializedHash.state) {
      return deserializedHash;
    }
  } catch (e) {
    throw createClientAuthError(hashNotDeserialized);
  }
  return null;
}

// node_modules/@azure/msal-common/dist/url/UrlString.mjs
var UrlString = class _UrlString {
  get urlString() {
    return this._urlString;
  }
  constructor(url) {
    this._urlString = url;
    if (!this._urlString) {
      throw createClientConfigurationError(urlEmptyError);
    }
    if (!url.includes("#")) {
      this._urlString = _UrlString.canonicalizeUri(url);
    }
  }
  /**
   * Ensure urls are lower case and end with a / character.
   * @param url
   */
  static canonicalizeUri(url) {
    if (url) {
      let lowerCaseUrl = url.toLowerCase();
      if (StringUtils.endsWith(lowerCaseUrl, "?")) {
        lowerCaseUrl = lowerCaseUrl.slice(0, -1);
      } else if (StringUtils.endsWith(lowerCaseUrl, "?/")) {
        lowerCaseUrl = lowerCaseUrl.slice(0, -2);
      }
      if (!StringUtils.endsWith(lowerCaseUrl, "/")) {
        lowerCaseUrl += "/";
      }
      return lowerCaseUrl;
    }
    return url;
  }
  /**
   * Throws if urlString passed is not a valid authority URI string.
   */
  validateAsUri() {
    let components;
    try {
      components = this.getUrlComponents();
    } catch (e) {
      throw createClientConfigurationError(urlParseError);
    }
    if (!components.HostNameAndPort || !components.PathSegments) {
      throw createClientConfigurationError(urlParseError);
    }
    if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
      throw createClientConfigurationError(authorityUriInsecure);
    }
  }
  /**
   * Given a url and a query string return the url with provided query string appended
   * @param url
   * @param queryString
   */
  static appendQueryString(url, queryString) {
    if (!queryString) {
      return url;
    }
    return url.indexOf("?") < 0 ? `${url}?${queryString}` : `${url}&${queryString}`;
  }
  /**
   * Returns a url with the hash removed
   * @param url
   */
  static removeHashFromUrl(url) {
    return _UrlString.canonicalizeUri(url.split("#")[0]);
  }
  /**
   * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
   * @param href The url
   * @param tenantId The tenant id to replace
   */
  replaceTenantPath(tenantId) {
    const urlObject = this.getUrlComponents();
    const pathArray = urlObject.PathSegments;
    if (tenantId && pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS)) {
      pathArray[0] = tenantId;
    }
    return _UrlString.constructAuthorityUriFromObject(urlObject);
  }
  /**
   * Parses out the components from a url string.
   * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
   */
  getUrlComponents() {
    const regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
    const match = this.urlString.match(regEx);
    if (!match) {
      throw createClientConfigurationError(urlParseError);
    }
    const urlComponents = {
      Protocol: match[1],
      HostNameAndPort: match[4],
      AbsolutePath: match[5],
      QueryString: match[7]
    };
    let pathSegments = urlComponents.AbsolutePath.split("/");
    pathSegments = pathSegments.filter((val) => val && val.length > 0);
    urlComponents.PathSegments = pathSegments;
    if (urlComponents.QueryString && urlComponents.QueryString.endsWith("/")) {
      urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
    }
    return urlComponents;
  }
  static getDomainFromUrl(url) {
    const regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
    const match = url.match(regEx);
    if (!match) {
      throw createClientConfigurationError(urlParseError);
    }
    return match[2];
  }
  static getAbsoluteUrl(relativeUrl, baseUrl) {
    if (relativeUrl[0] === Constants.FORWARD_SLASH) {
      const url = new _UrlString(baseUrl);
      const baseComponents = url.getUrlComponents();
      return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
    }
    return relativeUrl;
  }
  static constructAuthorityUriFromObject(urlObject) {
    return new _UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
  }
  /**
   * Check if the hash of the URL string contains known properties
   * @deprecated This API will be removed in a future version
   */
  static hashContainsKnownProperties(response) {
    return !!getDeserializedResponse(response);
  }
};

// node_modules/@azure/msal-common/dist/error/ServerError.mjs
var ServerError = class _ServerError extends AuthError {
  constructor(errorCode, errorMessage, subError, errorNo) {
    super(errorCode, errorMessage, subError);
    this.name = "ServerError";
    this.errorNo = errorNo;
    Object.setPrototypeOf(this, _ServerError.prototype);
  }
};

// node_modules/@azure/msal-common/dist/telemetry/performance/PerformanceEvent.mjs
var PerformanceEvents = {
  /**
   * acquireTokenByCode API (msal-browser and msal-node).
   * Used to acquire tokens by trading an authorization code against the token endpoint.
   */
  AcquireTokenByCode: "acquireTokenByCode",
  /**
   * acquireTokenByRefreshToken API (msal-browser and msal-node).
   * Used to renew an access token using a refresh token against the token endpoint.
   */
  AcquireTokenByRefreshToken: "acquireTokenByRefreshToken",
  /**
   * acquireTokenSilent API (msal-browser and msal-node).
   * Used to silently acquire a new access token (from the cache or the network).
   */
  AcquireTokenSilent: "acquireTokenSilent",
  /**
   * acquireTokenSilentAsync (msal-browser).
   * Internal API for acquireTokenSilent.
   */
  AcquireTokenSilentAsync: "acquireTokenSilentAsync",
  /**
   * acquireTokenPopup (msal-browser).
   * Used to acquire a new access token interactively through pop ups
   */
  AcquireTokenPopup: "acquireTokenPopup",
  /**
   * acquireTokenRedirect (msal-browser).
   * Used to acquire a new access token interactively through redirects
   */
  AcquireTokenRedirect: "acquireTokenRedirect",
  /**
   * getPublicKeyThumbprint API in CryptoOpts class (msal-browser).
   * Used to generate a public/private keypair and generate a public key thumbprint for pop requests.
   */
  CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint",
  /**
   * signJwt API in CryptoOpts class (msal-browser).
   * Used to signed a pop token.
   */
  CryptoOptsSignJwt: "cryptoOptsSignJwt",
  /**
   * acquireToken API in the SilentCacheClient class (msal-browser).
   * Used to read access tokens from the cache.
   */
  SilentCacheClientAcquireToken: "silentCacheClientAcquireToken",
  /**
   * acquireToken API in the SilentIframeClient class (msal-browser).
   * Used to acquire a new set of tokens from the authorize endpoint in a hidden iframe.
   */
  SilentIframeClientAcquireToken: "silentIframeClientAcquireToken",
  AwaitConcurrentIframe: "awaitConcurrentIframe",
  /**
   * acquireToken API in SilentRereshClient (msal-browser).
   * Used to acquire a new set of tokens from the token endpoint using a refresh token.
   */
  SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken",
  /**
   * ssoSilent API (msal-browser).
   * Used to silently acquire an authorization code and set of tokens using a hidden iframe.
   */
  SsoSilent: "ssoSilent",
  /**
   * getDiscoveredAuthority API in StandardInteractionClient class (msal-browser).
   * Used to load authority metadata for a request.
   */
  StandardInteractionClientGetDiscoveredAuthority: "standardInteractionClientGetDiscoveredAuthority",
  /**
   * acquireToken APIs in msal-browser.
   * Used to make an /authorize endpoint call with native brokering enabled.
   */
  FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker",
  /**
   * acquireToken API in NativeInteractionClient class (msal-browser).
   * Used to acquire a token from Native component when native brokering is enabled.
   */
  NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken",
  /**
   * Time spent creating default headers for requests to token endpoint
   */
  BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders",
  /**
   * Time spent sending/waiting for the response of a request to the token endpoint
   */
  RefreshTokenClientExecutePostToTokenEndpoint: "refreshTokenClientExecutePostToTokenEndpoint",
  AuthorizationCodeClientExecutePostToTokenEndpoint: "authorizationCodeClientExecutePostToTokenEndpoint",
  /**
   * Used to measure the time taken for completing embedded-broker handshake (PW-Broker).
   */
  BrokerHandhshake: "brokerHandshake",
  /**
   * acquireTokenByRefreshToken API in BrokerClientApplication (PW-Broker) .
   */
  AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker",
  /**
   * Time taken for token acquisition by broker
   */
  AcquireTokenByBroker: "acquireTokenByBroker",
  /**
   * Time spent on the network for refresh token acquisition
   */
  RefreshTokenClientExecuteTokenRequest: "refreshTokenClientExecuteTokenRequest",
  /**
   * Time taken for acquiring refresh token , records RT size
   */
  RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken",
  /**
   * Time taken for acquiring cached refresh token
   */
  RefreshTokenClientAcquireTokenWithCachedRefreshToken: "refreshTokenClientAcquireTokenWithCachedRefreshToken",
  /**
   * acquireTokenByRefreshToken API in RefreshTokenClient (msal-common).
   */
  RefreshTokenClientAcquireTokenByRefreshToken: "refreshTokenClientAcquireTokenByRefreshToken",
  /**
   * Helper function to create token request body in RefreshTokenClient (msal-common).
   */
  RefreshTokenClientCreateTokenRequestBody: "refreshTokenClientCreateTokenRequestBody",
  /**
   * acquireTokenFromCache (msal-browser).
   * Internal API for acquiring token from cache
   */
  AcquireTokenFromCache: "acquireTokenFromCache",
  SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken",
  SilentFlowClientGenerateResultFromCacheRecord: "silentFlowClientGenerateResultFromCacheRecord",
  /**
   * acquireTokenBySilentIframe (msal-browser).
   * Internal API for acquiring token by silent Iframe
   */
  AcquireTokenBySilentIframe: "acquireTokenBySilentIframe",
  /**
   * Internal API for initializing base request in BaseInteractionClient (msal-browser)
   */
  InitializeBaseRequest: "initializeBaseRequest",
  /**
   * Internal API for initializing silent request in SilentCacheClient (msal-browser)
   */
  InitializeSilentRequest: "initializeSilentRequest",
  InitializeClientApplication: "initializeClientApplication",
  /**
   * Helper function in SilentIframeClient class (msal-browser).
   */
  SilentIframeClientTokenHelper: "silentIframeClientTokenHelper",
  /**
   * SilentHandler
   */
  SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest",
  SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash",
  SilentHandlerLoadFrame: "silentHandlerLoadFrame",
  SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync",
  /**
   * Helper functions in StandardInteractionClient class (msal-browser)
   */
  StandardInteractionClientCreateAuthCodeClient: "standardInteractionClientCreateAuthCodeClient",
  StandardInteractionClientGetClientConfiguration: "standardInteractionClientGetClientConfiguration",
  StandardInteractionClientInitializeAuthorizationRequest: "standardInteractionClientInitializeAuthorizationRequest",
  StandardInteractionClientInitializeAuthorizationCodeRequest: "standardInteractionClientInitializeAuthorizationCodeRequest",
  /**
   * getAuthCodeUrl API (msal-browser and msal-node).
   */
  GetAuthCodeUrl: "getAuthCodeUrl",
  /**
   * Functions from InteractionHandler (msal-browser)
   */
  HandleCodeResponseFromServer: "handleCodeResponseFromServer",
  HandleCodeResponse: "handleCodeResponse",
  UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority",
  /**
   * APIs in Authorization Code Client (msal-common)
   */
  AuthClientAcquireToken: "authClientAcquireToken",
  AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest",
  AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody",
  AuthClientCreateQueryString: "authClientCreateQueryString",
  /**
   * Generate functions in PopTokenGenerator (msal-common)
   */
  PopTokenGenerateCnf: "popTokenGenerateCnf",
  PopTokenGenerateKid: "popTokenGenerateKid",
  /**
   * handleServerTokenResponse API in ResponseHandler (msal-common)
   */
  HandleServerTokenResponse: "handleServerTokenResponse",
  DeserializeResponse: "deserializeResponse",
  /**
   * Authority functions
   */
  AuthorityFactoryCreateDiscoveredInstance: "authorityFactoryCreateDiscoveredInstance",
  AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync",
  AuthorityResolveEndpointsFromLocalSources: "authorityResolveEndpointsFromLocalSources",
  AuthorityGetCloudDiscoveryMetadataFromNetwork: "authorityGetCloudDiscoveryMetadataFromNetwork",
  AuthorityUpdateCloudDiscoveryMetadata: "authorityUpdateCloudDiscoveryMetadata",
  AuthorityGetEndpointMetadataFromNetwork: "authorityGetEndpointMetadataFromNetwork",
  AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata",
  AuthorityUpdateMetadataWithRegionalInformation: "authorityUpdateMetadataWithRegionalInformation",
  /**
   * Region Discovery functions
   */
  RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion",
  RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS",
  RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion",
  AcquireTokenByCodeAsync: "acquireTokenByCodeAsync",
  GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork",
  GetCloudDiscoveryMetadataFromNetworkMeasurement: "getCloudDiscoveryMetadataFromNetworkMeasurement",
  HandleRedirectPromiseMeasurement: "handleRedirectPromise",
  HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise",
  UpdateCloudDiscoveryMetadataMeasurement: "updateCloudDiscoveryMetadataMeasurement",
  UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken",
  NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake",
  NativeGenerateAuthResult: "nativeGenerateAuthResult",
  RemoveHiddenIframe: "removeHiddenIframe",
  /**
   * Cache operations
   */
  ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims",
  CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken",
  /**
   * Crypto Operations
   */
  GeneratePkceCodes: "generatePkceCodes",
  GenerateCodeVerifier: "generateCodeVerifier",
  GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier",
  Sha256Digest: "sha256Digest",
  GetRandomValues: "getRandomValues"
};
var PerformanceEventAbbreviations = /* @__PURE__ */ new Map([
  [PerformanceEvents.AcquireTokenByCode, "ATByCode"],
  [PerformanceEvents.AcquireTokenByRefreshToken, "ATByRT"],
  [PerformanceEvents.AcquireTokenSilent, "ATS"],
  [PerformanceEvents.AcquireTokenSilentAsync, "ATSAsync"],
  [PerformanceEvents.AcquireTokenPopup, "ATPopup"],
  [PerformanceEvents.AcquireTokenRedirect, "ATRedirect"],
  [
    PerformanceEvents.CryptoOptsGetPublicKeyThumbprint,
    "CryptoGetPKThumb"
  ],
  [PerformanceEvents.CryptoOptsSignJwt, "CryptoSignJwt"],
  [PerformanceEvents.SilentCacheClientAcquireToken, "SltCacheClientAT"],
  [PerformanceEvents.SilentIframeClientAcquireToken, "SltIframeClientAT"],
  [PerformanceEvents.SilentRefreshClientAcquireToken, "SltRClientAT"],
  [PerformanceEvents.SsoSilent, "SsoSlt"],
  [
    PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority,
    "StdIntClientGetDiscAuth"
  ],
  [
    PerformanceEvents.FetchAccountIdWithNativeBroker,
    "FetchAccIdWithNtvBroker"
  ],
  [
    PerformanceEvents.NativeInteractionClientAcquireToken,
    "NtvIntClientAT"
  ],
  [
    PerformanceEvents.BaseClientCreateTokenRequestHeaders,
    "BaseClientCreateTReqHead"
  ],
  [
    PerformanceEvents.RefreshTokenClientExecutePostToTokenEndpoint,
    "RTClientExecPost"
  ],
  [
    PerformanceEvents.AuthorizationCodeClientExecutePostToTokenEndpoint,
    "AuthCodeClientExecPost"
  ],
  [PerformanceEvents.BrokerHandhshake, "BrokerHandshake"],
  [
    PerformanceEvents.AcquireTokenByRefreshTokenInBroker,
    "ATByRTInBroker"
  ],
  [PerformanceEvents.AcquireTokenByBroker, "ATByBroker"],
  [
    PerformanceEvents.RefreshTokenClientExecuteTokenRequest,
    "RTClientExecTReq"
  ],
  [PerformanceEvents.RefreshTokenClientAcquireToken, "RTClientAT"],
  [
    PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken,
    "RTClientATWithCachedRT"
  ],
  [
    PerformanceEvents.RefreshTokenClientAcquireTokenByRefreshToken,
    "RTClientATByRT"
  ],
  [
    PerformanceEvents.RefreshTokenClientCreateTokenRequestBody,
    "RTClientCreateTReqBody"
  ],
  [PerformanceEvents.AcquireTokenFromCache, "ATFromCache"],
  [
    PerformanceEvents.SilentFlowClientAcquireCachedToken,
    "SltFlowClientATCached"
  ],
  [
    PerformanceEvents.SilentFlowClientGenerateResultFromCacheRecord,
    "SltFlowClientGenResFromCache"
  ],
  [PerformanceEvents.AcquireTokenBySilentIframe, "ATBySltIframe"],
  [PerformanceEvents.InitializeBaseRequest, "InitBaseReq"],
  [PerformanceEvents.InitializeSilentRequest, "InitSltReq"],
  [
    PerformanceEvents.InitializeClientApplication,
    "InitClientApplication"
  ],
  [PerformanceEvents.SilentIframeClientTokenHelper, "SIClientTHelper"],
  [
    PerformanceEvents.SilentHandlerInitiateAuthRequest,
    "SHandlerInitAuthReq"
  ],
  [
    PerformanceEvents.SilentHandlerMonitorIframeForHash,
    "SltHandlerMonitorIframeForHash"
  ],
  [PerformanceEvents.SilentHandlerLoadFrame, "SHandlerLoadFrame"],
  [PerformanceEvents.SilentHandlerLoadFrameSync, "SHandlerLoadFrameSync"],
  [
    PerformanceEvents.StandardInteractionClientCreateAuthCodeClient,
    "StdIntClientCreateAuthCodeClient"
  ],
  [
    PerformanceEvents.StandardInteractionClientGetClientConfiguration,
    "StdIntClientGetClientConf"
  ],
  [
    PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest,
    "StdIntClientInitAuthReq"
  ],
  [
    PerformanceEvents.StandardInteractionClientInitializeAuthorizationCodeRequest,
    "StdIntClientInitAuthCodeReq"
  ],
  [PerformanceEvents.GetAuthCodeUrl, "GetAuthCodeUrl"],
  [
    PerformanceEvents.HandleCodeResponseFromServer,
    "HandleCodeResFromServer"
  ],
  [PerformanceEvents.HandleCodeResponse, "HandleCodeResp"],
  [PerformanceEvents.UpdateTokenEndpointAuthority, "UpdTEndpointAuth"],
  [PerformanceEvents.AuthClientAcquireToken, "AuthClientAT"],
  [PerformanceEvents.AuthClientExecuteTokenRequest, "AuthClientExecTReq"],
  [
    PerformanceEvents.AuthClientCreateTokenRequestBody,
    "AuthClientCreateTReqBody"
  ],
  [
    PerformanceEvents.AuthClientCreateQueryString,
    "AuthClientCreateQueryStr"
  ],
  [PerformanceEvents.PopTokenGenerateCnf, "PopTGenCnf"],
  [PerformanceEvents.PopTokenGenerateKid, "PopTGenKid"],
  [PerformanceEvents.HandleServerTokenResponse, "HandleServerTRes"],
  [PerformanceEvents.DeserializeResponse, "DeserializeRes"],
  [
    PerformanceEvents.AuthorityFactoryCreateDiscoveredInstance,
    "AuthFactCreateDiscInst"
  ],
  [
    PerformanceEvents.AuthorityResolveEndpointsAsync,
    "AuthResolveEndpointsAsync"
  ],
  [
    PerformanceEvents.AuthorityResolveEndpointsFromLocalSources,
    "AuthResolveEndpointsFromLocal"
  ],
  [
    PerformanceEvents.AuthorityGetCloudDiscoveryMetadataFromNetwork,
    "AuthGetCDMetaFromNet"
  ],
  [
    PerformanceEvents.AuthorityUpdateCloudDiscoveryMetadata,
    "AuthUpdCDMeta"
  ],
  [
    PerformanceEvents.AuthorityGetEndpointMetadataFromNetwork,
    "AuthUpdCDMetaFromNet"
  ],
  [
    PerformanceEvents.AuthorityUpdateEndpointMetadata,
    "AuthUpdEndpointMeta"
  ],
  [
    PerformanceEvents.AuthorityUpdateMetadataWithRegionalInformation,
    "AuthUpdMetaWithRegInfo"
  ],
  [PerformanceEvents.RegionDiscoveryDetectRegion, "RegDiscDetectReg"],
  [
    PerformanceEvents.RegionDiscoveryGetRegionFromIMDS,
    "RegDiscGetRegFromIMDS"
  ],
  [
    PerformanceEvents.RegionDiscoveryGetCurrentVersion,
    "RegDiscGetCurrentVer"
  ],
  [PerformanceEvents.AcquireTokenByCodeAsync, "ATByCodeAsync"],
  [
    PerformanceEvents.GetEndpointMetadataFromNetwork,
    "GetEndpointMetaFromNet"
  ],
  [
    PerformanceEvents.GetCloudDiscoveryMetadataFromNetworkMeasurement,
    "GetCDMetaFromNet"
  ],
  [
    PerformanceEvents.HandleRedirectPromiseMeasurement,
    "HandleRedirectPromise"
  ],
  [
    PerformanceEvents.HandleNativeRedirectPromiseMeasurement,
    "HandleNtvRedirectPromise"
  ],
  [
    PerformanceEvents.UpdateCloudDiscoveryMetadataMeasurement,
    "UpdateCDMeta"
  ],
  [
    PerformanceEvents.UsernamePasswordClientAcquireToken,
    "UserPassClientAT"
  ],
  [
    PerformanceEvents.NativeMessageHandlerHandshake,
    "NtvMsgHandlerHandshake"
  ],
  [PerformanceEvents.NativeGenerateAuthResult, "NtvGenAuthRes"],
  [PerformanceEvents.RemoveHiddenIframe, "RemoveHiddenIframe"],
  [
    PerformanceEvents.ClearTokensAndKeysWithClaims,
    "ClearTAndKeysWithClaims"
  ],
  [PerformanceEvents.CacheManagerGetRefreshToken, "CacheManagerGetRT"],
  [PerformanceEvents.GeneratePkceCodes, "GenPkceCodes"],
  [PerformanceEvents.GenerateCodeVerifier, "GenCodeVerifier"],
  [
    PerformanceEvents.GenerateCodeChallengeFromVerifier,
    "GenCodeChallengeFromVerifier"
  ],
  [PerformanceEvents.Sha256Digest, "Sha256Digest"],
  [PerformanceEvents.GetRandomValues, "GetRandomValues"]
]);
var PerformanceEventStatus = {
  NotStarted: 0,
  InProgress: 1,
  Completed: 2
};
var IntFields = /* @__PURE__ */ new Set([
  "accessTokenSize",
  "durationMs",
  "idTokenSize",
  "matsSilentStatus",
  "matsHttpStatus",
  "refreshTokenSize",
  "queuedTimeMs",
  "startTimeMs",
  "status",
  "multiMatchedAT",
  "multiMatchedID",
  "multiMatchedRT"
]);

// node_modules/@azure/msal-common/dist/utils/FunctionWrappers.mjs
var invoke = (callback, eventName, logger, telemetryClient, correlationId) => {
  return (...args) => {
    logger.trace(`Executing function ${eventName}`);
    const inProgressEvent = telemetryClient?.startMeasurement(eventName, correlationId);
    if (correlationId) {
      const eventCount = eventName + "CallCount";
      telemetryClient?.incrementFields({ [eventCount]: 1 }, correlationId);
    }
    try {
      const result = callback(...args);
      inProgressEvent?.end({
        success: true
      });
      logger.trace(`Returning result from ${eventName}`);
      return result;
    } catch (e) {
      logger.trace(`Error occurred in ${eventName}`);
      try {
        logger.trace(JSON.stringify(e));
      } catch (e2) {
        logger.trace("Unable to print error message.");
      }
      inProgressEvent?.end({
        success: false
      }, e);
      throw e;
    }
  };
};
var invokeAsync = (callback, eventName, logger, telemetryClient, correlationId) => {
  return (...args) => {
    logger.trace(`Executing function ${eventName}`);
    const inProgressEvent = telemetryClient?.startMeasurement(eventName, correlationId);
    if (correlationId) {
      const eventCount = eventName + "CallCount";
      telemetryClient?.incrementFields({ [eventCount]: 1 }, correlationId);
    }
    telemetryClient?.setPreQueueTime(eventName, correlationId);
    return callback(...args).then((response) => {
      logger.trace(`Returning result from ${eventName}`);
      inProgressEvent?.end({
        success: true
      });
      return response;
    }).catch((e) => {
      logger.trace(`Error occurred in ${eventName}`);
      try {
        logger.trace(JSON.stringify(e));
      } catch (e2) {
        logger.trace("Unable to print error message.");
      }
      inProgressEvent?.end({
        success: false
      }, e);
      throw e;
    });
  };
};

// node_modules/@azure/msal-common/dist/authority/OpenIdConfigResponse.mjs
function isOpenIdConfigResponse(response) {
  return response.hasOwnProperty("authorization_endpoint") && response.hasOwnProperty("token_endpoint") && response.hasOwnProperty("issuer") && response.hasOwnProperty("jwks_uri");
}

// node_modules/@azure/msal-common/dist/authority/AuthorityMetadata.mjs
var rawMetdataJSON = {
  endpointMetadata: {
    "login.microsoftonline.com": {
      token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token",
      jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys",
      issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
      authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize",
      end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout"
    },
    "login.chinacloudapi.cn": {
      token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token",
      jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys",
      issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
      authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize",
      end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout"
    },
    "login.microsoftonline.us": {
      token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token",
      jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys",
      issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
      authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize",
      end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout"
    }
  },
  instanceDiscoveryMetadata: {
    tenant_discovery_endpoint: "https://{canonicalAuthority}/v2.0/.well-known/openid-configuration",
    metadata: [
      {
        preferred_network: "login.microsoftonline.com",
        preferred_cache: "login.windows.net",
        aliases: [
          "login.microsoftonline.com",
          "login.windows.net",
          "login.microsoft.com",
          "sts.windows.net"
        ]
      },
      {
        preferred_network: "login.partner.microsoftonline.cn",
        preferred_cache: "login.partner.microsoftonline.cn",
        aliases: [
          "login.partner.microsoftonline.cn",
          "login.chinacloudapi.cn"
        ]
      },
      {
        preferred_network: "login.microsoftonline.de",
        preferred_cache: "login.microsoftonline.de",
        aliases: ["login.microsoftonline.de"]
      },
      {
        preferred_network: "login.microsoftonline.us",
        preferred_cache: "login.microsoftonline.us",
        aliases: [
          "login.microsoftonline.us",
          "login.usgovcloudapi.net"
        ]
      },
      {
        preferred_network: "login-us.microsoftonline.com",
        preferred_cache: "login-us.microsoftonline.com",
        aliases: ["login-us.microsoftonline.com"]
      }
    ]
  }
};
var EndpointMetadata = rawMetdataJSON.endpointMetadata;
var InstanceDiscoveryMetadata = rawMetdataJSON.instanceDiscoveryMetadata;
var InstanceDiscoveryMetadataAliases = /* @__PURE__ */ new Set();
InstanceDiscoveryMetadata.metadata.forEach((metadataEntry) => {
  metadataEntry.aliases.forEach((alias) => {
    InstanceDiscoveryMetadataAliases.add(alias);
  });
});
function getAliasesFromStaticSources(staticAuthorityOptions, logger) {
  let staticAliases;
  const canonicalAuthority = staticAuthorityOptions.canonicalAuthority;
  if (canonicalAuthority) {
    const authorityHost = new UrlString(canonicalAuthority).getUrlComponents().HostNameAndPort;
    staticAliases = getAliasesFromMetadata(authorityHost, staticAuthorityOptions.cloudDiscoveryMetadata?.metadata, AuthorityMetadataSource.CONFIG, logger) || getAliasesFromMetadata(authorityHost, InstanceDiscoveryMetadata.metadata, AuthorityMetadataSource.HARDCODED_VALUES, logger) || staticAuthorityOptions.knownAuthorities;
  }
  return staticAliases || [];
}
function getAliasesFromMetadata(authorityHost, cloudDiscoveryMetadata, source, logger) {
  logger?.trace(`getAliasesFromMetadata called with source: ${source}`);
  if (authorityHost && cloudDiscoveryMetadata) {
    const metadata = getCloudDiscoveryMetadataFromNetworkResponse(cloudDiscoveryMetadata, authorityHost);
    if (metadata) {
      logger?.trace(`getAliasesFromMetadata: found cloud discovery metadata in ${source}, returning aliases`);
      return metadata.aliases;
    } else {
      logger?.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${source}`);
    }
  }
  return null;
}
function getCloudDiscoveryMetadataFromHardcodedValues(authorityHost) {
  const metadata = getCloudDiscoveryMetadataFromNetworkResponse(InstanceDiscoveryMetadata.metadata, authorityHost);
  return metadata;
}
function getCloudDiscoveryMetadataFromNetworkResponse(response, authorityHost) {
  for (let i = 0; i < response.length; i++) {
    const metadata = response[i];
    if (metadata.aliases.includes(authorityHost)) {
      return metadata;
    }
  }
  return null;
}

// node_modules/@azure/msal-common/dist/authority/CloudInstanceDiscoveryResponse.mjs
function isCloudInstanceDiscoveryResponse(response) {
  return response.hasOwnProperty("tenant_discovery_endpoint") && response.hasOwnProperty("metadata");
}

// node_modules/@azure/msal-common/dist/authority/CloudInstanceDiscoveryErrorResponse.mjs
function isCloudInstanceDiscoveryErrorResponse(response) {
  return response.hasOwnProperty("error") && response.hasOwnProperty("error_description");
}

// node_modules/@azure/msal-common/dist/authority/RegionDiscovery.mjs
var RegionDiscovery = class _RegionDiscovery {
  constructor(networkInterface, logger, performanceClient, correlationId) {
    this.networkInterface = networkInterface;
    this.logger = logger;
    this.performanceClient = performanceClient;
    this.correlationId = correlationId;
  }
  /**
   * Detect the region from the application's environment.
   *
   * @returns Promise<string | null>
   */
  detectRegion(environmentRegion, regionDiscoveryMetadata) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RegionDiscoveryDetectRegion, this.correlationId);
      let autodetectedRegionName = environmentRegion;
      if (!autodetectedRegionName) {
        const options = _RegionDiscovery.IMDS_OPTIONS;
        try {
          const localIMDSVersionResponse = yield invokeAsync(this.getRegionFromIMDS.bind(this), PerformanceEvents.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(Constants.IMDS_VERSION, options);
          if (localIMDSVersionResponse.status === ResponseCodes.httpSuccess) {
            autodetectedRegionName = localIMDSVersionResponse.body;
            regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
          }
          if (localIMDSVersionResponse.status === ResponseCodes.httpBadRequest) {
            const currentIMDSVersion = yield invokeAsync(this.getCurrentVersion.bind(this), PerformanceEvents.RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(options);
            if (!currentIMDSVersion) {
              regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
              return null;
            }
            const currentIMDSVersionResponse = yield invokeAsync(this.getRegionFromIMDS.bind(this), PerformanceEvents.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(currentIMDSVersion, options);
            if (currentIMDSVersionResponse.status === ResponseCodes.httpSuccess) {
              autodetectedRegionName = currentIMDSVersionResponse.body;
              regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
            }
          }
        } catch (e) {
          regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
          return null;
        }
      } else {
        regionDiscoveryMetadata.region_source = RegionDiscoverySources.ENVIRONMENT_VARIABLE;
      }
      if (!autodetectedRegionName) {
        regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
      }
      return autodetectedRegionName || null;
    });
  }
  /**
   * Make the call to the IMDS endpoint
   *
   * @param imdsEndpointUrl
   * @returns Promise<NetworkResponse<string>>
   */
  getRegionFromIMDS(version2, options) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RegionDiscoveryGetRegionFromIMDS, this.correlationId);
      return this.networkInterface.sendGetRequestAsync(`${Constants.IMDS_ENDPOINT}?api-version=${version2}&format=text`, options, Constants.IMDS_TIMEOUT);
    });
  }
  /**
   * Get the most recent version of the IMDS endpoint available
   *
   * @returns Promise<string | null>
   */
  getCurrentVersion(options) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RegionDiscoveryGetCurrentVersion, this.correlationId);
      try {
        const response = yield this.networkInterface.sendGetRequestAsync(`${Constants.IMDS_ENDPOINT}?format=json`, options);
        if (response.status === ResponseCodes.httpBadRequest && response.body && response.body["newest-versions"] && response.body["newest-versions"].length > 0) {
          return response.body["newest-versions"][0];
        }
        return null;
      } catch (e) {
        return null;
      }
    });
  }
};
RegionDiscovery.IMDS_OPTIONS = {
  headers: {
    Metadata: "true"
  }
};

// node_modules/@azure/msal-common/dist/cache/utils/CacheHelpers.mjs
var CacheHelpers_exports = {};
__export(CacheHelpers_exports, {
  createAccessTokenEntity: () => createAccessTokenEntity,
  createIdTokenEntity: () => createIdTokenEntity,
  createRefreshTokenEntity: () => createRefreshTokenEntity,
  generateAppMetadataKey: () => generateAppMetadataKey,
  generateAuthorityMetadataExpiresAt: () => generateAuthorityMetadataExpiresAt,
  generateCredentialKey: () => generateCredentialKey,
  isAccessTokenEntity: () => isAccessTokenEntity,
  isAppMetadataEntity: () => isAppMetadataEntity,
  isAuthorityMetadataEntity: () => isAuthorityMetadataEntity,
  isAuthorityMetadataExpired: () => isAuthorityMetadataExpired,
  isCredentialEntity: () => isCredentialEntity,
  isIdTokenEntity: () => isIdTokenEntity,
  isRefreshTokenEntity: () => isRefreshTokenEntity,
  isServerTelemetryEntity: () => isServerTelemetryEntity,
  isThrottlingEntity: () => isThrottlingEntity,
  updateAuthorityEndpointMetadata: () => updateAuthorityEndpointMetadata,
  updateCloudDiscoveryMetadata: () => updateCloudDiscoveryMetadata
});

// node_modules/@azure/msal-common/dist/account/AuthToken.mjs
var AuthToken_exports = {};
__export(AuthToken_exports, {
  checkMaxAge: () => checkMaxAge,
  extractTokenClaims: () => extractTokenClaims,
  getJWSPayload: () => getJWSPayload
});
function extractTokenClaims(encodedToken, base64Decode2) {
  const jswPayload = getJWSPayload(encodedToken);
  try {
    const base64Decoded = base64Decode2(jswPayload);
    return JSON.parse(base64Decoded);
  } catch (err) {
    throw createClientAuthError(tokenParsingError);
  }
}
function getJWSPayload(authToken) {
  if (!authToken) {
    throw createClientAuthError(nullOrEmptyToken);
  }
  const tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
  const matches = tokenPartsRegex.exec(authToken);
  if (!matches || matches.length < 4) {
    throw createClientAuthError(tokenParsingError);
  }
  return matches[2];
}
function checkMaxAge(authTime, maxAge) {
  const fiveMinuteSkew = 3e5;
  if (maxAge === 0 || Date.now() - fiveMinuteSkew > authTime + maxAge) {
    throw createClientAuthError(maxAgeTranspired);
  }
}

// node_modules/@azure/msal-common/dist/cache/utils/CacheHelpers.mjs
function generateCredentialKey(credentialEntity) {
  const credentialKey = [
    generateAccountId(credentialEntity),
    generateCredentialId(credentialEntity),
    generateTarget(credentialEntity),
    generateClaimsHash(credentialEntity),
    generateScheme(credentialEntity)
  ];
  return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
}
function createIdTokenEntity(homeAccountId, environment, idToken, clientId, tenantId) {
  const idTokenEntity = {
    credentialType: CredentialType.ID_TOKEN,
    homeAccountId,
    environment,
    clientId,
    secret: idToken,
    realm: tenantId
  };
  return idTokenEntity;
}
function createAccessTokenEntity(homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, base64Decode2, refreshOn, tokenType, userAssertionHash, keyId, requestedClaims, requestedClaimsHash) {
  const atEntity = {
    homeAccountId,
    credentialType: CredentialType.ACCESS_TOKEN,
    secret: accessToken,
    cachedAt: nowSeconds().toString(),
    expiresOn: expiresOn.toString(),
    extendedExpiresOn: extExpiresOn.toString(),
    environment,
    clientId,
    realm: tenantId,
    target: scopes,
    tokenType: tokenType || AuthenticationScheme.BEARER
  };
  if (userAssertionHash) {
    atEntity.userAssertionHash = userAssertionHash;
  }
  if (refreshOn) {
    atEntity.refreshOn = refreshOn.toString();
  }
  if (requestedClaims) {
    atEntity.requestedClaims = requestedClaims;
    atEntity.requestedClaimsHash = requestedClaimsHash;
  }
  if (atEntity.tokenType?.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase()) {
    atEntity.credentialType = CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
    switch (atEntity.tokenType) {
      case AuthenticationScheme.POP:
        const tokenClaims = extractTokenClaims(accessToken, base64Decode2);
        if (!tokenClaims?.cnf?.kid) {
          throw createClientAuthError(tokenClaimsCnfRequiredForSignedJwt);
        }
        atEntity.keyId = tokenClaims.cnf.kid;
        break;
      case AuthenticationScheme.SSH:
        atEntity.keyId = keyId;
    }
  }
  return atEntity;
}
function createRefreshTokenEntity(homeAccountId, environment, refreshToken, clientId, familyId, userAssertionHash, expiresOn) {
  const rtEntity = {
    credentialType: CredentialType.REFRESH_TOKEN,
    homeAccountId,
    environment,
    clientId,
    secret: refreshToken
  };
  if (userAssertionHash) {
    rtEntity.userAssertionHash = userAssertionHash;
  }
  if (familyId) {
    rtEntity.familyId = familyId;
  }
  if (expiresOn) {
    rtEntity.expiresOn = expiresOn.toString();
  }
  return rtEntity;
}
function isCredentialEntity(entity) {
  return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("credentialType") && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("secret");
}
function isAccessTokenEntity(entity) {
  if (!entity) {
    return false;
  }
  return isCredentialEntity(entity) && entity.hasOwnProperty("realm") && entity.hasOwnProperty("target") && (entity["credentialType"] === CredentialType.ACCESS_TOKEN || entity["credentialType"] === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME);
}
function isIdTokenEntity(entity) {
  if (!entity) {
    return false;
  }
  return isCredentialEntity(entity) && entity.hasOwnProperty("realm") && entity["credentialType"] === CredentialType.ID_TOKEN;
}
function isRefreshTokenEntity(entity) {
  if (!entity) {
    return false;
  }
  return isCredentialEntity(entity) && entity["credentialType"] === CredentialType.REFRESH_TOKEN;
}
function generateAccountId(credentialEntity) {
  const accountId = [
    credentialEntity.homeAccountId,
    credentialEntity.environment
  ];
  return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
}
function generateCredentialId(credentialEntity) {
  const clientOrFamilyId = credentialEntity.credentialType === CredentialType.REFRESH_TOKEN ? credentialEntity.familyId || credentialEntity.clientId : credentialEntity.clientId;
  const credentialId = [
    credentialEntity.credentialType,
    clientOrFamilyId,
    credentialEntity.realm || ""
  ];
  return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
}
function generateTarget(credentialEntity) {
  return (credentialEntity.target || "").toLowerCase();
}
function generateClaimsHash(credentialEntity) {
  return (credentialEntity.requestedClaimsHash || "").toLowerCase();
}
function generateScheme(credentialEntity) {
  return credentialEntity.tokenType && credentialEntity.tokenType.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase() ? credentialEntity.tokenType.toLowerCase() : "";
}
function isServerTelemetryEntity(key, entity) {
  const validateKey = key.indexOf(SERVER_TELEM_CONSTANTS.CACHE_KEY) === 0;
  let validateEntity = true;
  if (entity) {
    validateEntity = entity.hasOwnProperty("failedRequests") && entity.hasOwnProperty("errors") && entity.hasOwnProperty("cacheHits");
  }
  return validateKey && validateEntity;
}
function isThrottlingEntity(key, entity) {
  let validateKey = false;
  if (key) {
    validateKey = key.indexOf(ThrottlingConstants.THROTTLING_PREFIX) === 0;
  }
  let validateEntity = true;
  if (entity) {
    validateEntity = entity.hasOwnProperty("throttleTime");
  }
  return validateKey && validateEntity;
}
function generateAppMetadataKey({ environment, clientId }) {
  const appMetaDataKeyArray = [
    APP_METADATA,
    environment,
    clientId
  ];
  return appMetaDataKeyArray.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
}
function isAppMetadataEntity(key, entity) {
  if (!entity) {
    return false;
  }
  return key.indexOf(APP_METADATA) === 0 && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("environment");
}
function isAuthorityMetadataEntity(key, entity) {
  if (!entity) {
    return false;
  }
  return key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) === 0 && entity.hasOwnProperty("aliases") && entity.hasOwnProperty("preferred_cache") && entity.hasOwnProperty("preferred_network") && entity.hasOwnProperty("canonical_authority") && entity.hasOwnProperty("authorization_endpoint") && entity.hasOwnProperty("token_endpoint") && entity.hasOwnProperty("issuer") && entity.hasOwnProperty("aliasesFromNetwork") && entity.hasOwnProperty("endpointsFromNetwork") && entity.hasOwnProperty("expiresAt") && entity.hasOwnProperty("jwks_uri");
}
function generateAuthorityMetadataExpiresAt() {
  return nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
}
function updateAuthorityEndpointMetadata(authorityMetadata, updatedValues, fromNetwork) {
  authorityMetadata.authorization_endpoint = updatedValues.authorization_endpoint;
  authorityMetadata.token_endpoint = updatedValues.token_endpoint;
  authorityMetadata.end_session_endpoint = updatedValues.end_session_endpoint;
  authorityMetadata.issuer = updatedValues.issuer;
  authorityMetadata.endpointsFromNetwork = fromNetwork;
  authorityMetadata.jwks_uri = updatedValues.jwks_uri;
}
function updateCloudDiscoveryMetadata(authorityMetadata, updatedValues, fromNetwork) {
  authorityMetadata.aliases = updatedValues.aliases;
  authorityMetadata.preferred_cache = updatedValues.preferred_cache;
  authorityMetadata.preferred_network = updatedValues.preferred_network;
  authorityMetadata.aliasesFromNetwork = fromNetwork;
}
function isAuthorityMetadataExpired(metadata) {
  return metadata.expiresAt <= nowSeconds();
}

// node_modules/@azure/msal-common/dist/authority/Authority.mjs
var Authority = class _Authority {
  constructor(authority, networkInterface, cacheManager, authorityOptions, logger, correlationId, performanceClient, managedIdentity) {
    this.canonicalAuthority = authority;
    this._canonicalAuthority.validateAsUri();
    this.networkInterface = networkInterface;
    this.cacheManager = cacheManager;
    this.authorityOptions = authorityOptions;
    this.regionDiscoveryMetadata = {
      region_used: void 0,
      region_source: void 0,
      region_outcome: void 0
    };
    this.logger = logger;
    this.performanceClient = performanceClient;
    this.correlationId = correlationId;
    this.managedIdentity = managedIdentity || false;
    this.regionDiscovery = new RegionDiscovery(networkInterface, this.logger, this.performanceClient, this.correlationId);
  }
  /**
   * Get {@link AuthorityType}
   * @param authorityUri {@link IUri}
   * @private
   */
  getAuthorityType(authorityUri) {
    if (authorityUri.HostNameAndPort.endsWith(Constants.CIAM_AUTH_URL)) {
      return AuthorityType.Ciam;
    }
    const pathSegments = authorityUri.PathSegments;
    if (pathSegments.length) {
      switch (pathSegments[0].toLowerCase()) {
        case Constants.ADFS:
          return AuthorityType.Adfs;
        case Constants.DSTS:
          return AuthorityType.Dsts;
      }
    }
    return AuthorityType.Default;
  }
  // See above for AuthorityType
  get authorityType() {
    return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
  }
  /**
   * ProtocolMode enum representing the way endpoints are constructed.
   */
  get protocolMode() {
    return this.authorityOptions.protocolMode;
  }
  /**
   * Returns authorityOptions which can be used to reinstantiate a new authority instance
   */
  get options() {
    return this.authorityOptions;
  }
  /**
   * A URL that is the authority set by the developer
   */
  get canonicalAuthority() {
    return this._canonicalAuthority.urlString;
  }
  /**
   * Sets canonical authority.
   */
  set canonicalAuthority(url) {
    this._canonicalAuthority = new UrlString(url);
    this._canonicalAuthority.validateAsUri();
    this._canonicalAuthorityUrlComponents = null;
  }
  /**
   * Get authority components.
   */
  get canonicalAuthorityUrlComponents() {
    if (!this._canonicalAuthorityUrlComponents) {
      this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
    }
    return this._canonicalAuthorityUrlComponents;
  }
  /**
   * Get hostname and port i.e. login.microsoftonline.com
   */
  get hostnameAndPort() {
    return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
  }
  /**
   * Get tenant for authority.
   */
  get tenant() {
    return this.canonicalAuthorityUrlComponents.PathSegments[0];
  }
  /**
   * OAuth /authorize endpoint for requests
   */
  get authorizationEndpoint() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.authorization_endpoint);
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  /**
   * OAuth /token endpoint for requests
   */
  get tokenEndpoint() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.token_endpoint);
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  get deviceCodeEndpoint() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  /**
   * OAuth logout endpoint for requests
   */
  get endSessionEndpoint() {
    if (this.discoveryComplete()) {
      if (!this.metadata.end_session_endpoint) {
        throw createClientAuthError(endSessionEndpointNotSupported);
      }
      return this.replacePath(this.metadata.end_session_endpoint);
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  /**
   * OAuth issuer for requests
   */
  get selfSignedJwtAudience() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.issuer);
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  /**
   * Jwks_uri for token signing keys
   */
  get jwksUri() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.jwks_uri);
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  /**
   * Returns a flag indicating that tenant name can be replaced in authority {@link IUri}
   * @param authorityUri {@link IUri}
   * @private
   */
  canReplaceTenant(authorityUri) {
    return authorityUri.PathSegments.length === 1 && !_Authority.reservedTenantDomains.has(authorityUri.PathSegments[0]) && this.getAuthorityType(authorityUri) === AuthorityType.Default && this.protocolMode === ProtocolMode.AAD;
  }
  /**
   * Replaces tenant in url path with current tenant. Defaults to common.
   * @param urlString
   */
  replaceTenant(urlString) {
    return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
  }
  /**
   * Replaces path such as tenant or policy with the current tenant or policy.
   * @param urlString
   */
  replacePath(urlString) {
    let endpoint = urlString;
    const cachedAuthorityUrl = new UrlString(this.metadata.canonical_authority);
    const cachedAuthorityUrlComponents = cachedAuthorityUrl.getUrlComponents();
    const cachedAuthorityParts = cachedAuthorityUrlComponents.PathSegments;
    const currentAuthorityParts = this.canonicalAuthorityUrlComponents.PathSegments;
    currentAuthorityParts.forEach((currentPart, index) => {
      let cachedPart = cachedAuthorityParts[index];
      if (index === 0 && this.canReplaceTenant(cachedAuthorityUrlComponents)) {
        const tenantId = new UrlString(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
        if (cachedPart !== tenantId) {
          this.logger.verbose(`Replacing tenant domain name ${cachedPart} with id ${tenantId}`);
          cachedPart = tenantId;
        }
      }
      if (currentPart !== cachedPart) {
        endpoint = endpoint.replace(`/${cachedPart}/`, `/${currentPart}/`);
      }
    });
    return this.replaceTenant(endpoint);
  }
  /**
   * The default open id configuration endpoint for any canonical authority.
   */
  get defaultOpenIdConfigurationEndpoint() {
    const canonicalAuthorityHost = this.hostnameAndPort;
    if (this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === AuthorityType.Adfs || this.protocolMode !== ProtocolMode.AAD && !this.isAliasOfKnownMicrosoftAuthority(canonicalAuthorityHost)) {
      return `${this.canonicalAuthority}.well-known/openid-configuration`;
    }
    return `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
  }
  /**
   * Boolean that returns whether or not tenant discovery has been completed.
   */
  discoveryComplete() {
    return !!this.metadata;
  }
  /**
   * Perform endpoint discovery to discover aliases, preferred_cache, preferred_network
   * and the /authorize, /token and logout endpoints.
   */
  resolveEndpointsAsync() {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityResolveEndpointsAsync, this.correlationId);
      const metadataEntity = this.getCurrentMetadataEntity();
      const cloudDiscoverySource = yield invokeAsync(this.updateCloudDiscoveryMetadata.bind(this), PerformanceEvents.AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(metadataEntity);
      this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, metadataEntity.preferred_network);
      const endpointSource = yield invokeAsync(this.updateEndpointMetadata.bind(this), PerformanceEvents.AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(metadataEntity);
      this.updateCachedMetadata(metadataEntity, cloudDiscoverySource, {
        source: endpointSource
      });
      this.performanceClient?.addFields({
        cloudDiscoverySource,
        authorityEndpointSource: endpointSource
      }, this.correlationId);
    });
  }
  /**
   * Returns metadata entity from cache if it exists, otherwiser returns a new metadata entity built
   * from the configured canonical authority
   * @returns
   */
  getCurrentMetadataEntity() {
    let metadataEntity = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
    if (!metadataEntity) {
      metadataEntity = {
        aliases: [],
        preferred_cache: this.hostnameAndPort,
        preferred_network: this.hostnameAndPort,
        canonical_authority: this.canonicalAuthority,
        authorization_endpoint: "",
        token_endpoint: "",
        end_session_endpoint: "",
        issuer: "",
        aliasesFromNetwork: false,
        endpointsFromNetwork: false,
        expiresAt: generateAuthorityMetadataExpiresAt(),
        jwks_uri: ""
      };
    }
    return metadataEntity;
  }
  /**
   * Updates cached metadata based on metadata source and sets the instance's metadata
   * property to the same value
   * @param metadataEntity
   * @param cloudDiscoverySource
   * @param endpointMetadataResult
   */
  updateCachedMetadata(metadataEntity, cloudDiscoverySource, endpointMetadataResult) {
    if (cloudDiscoverySource !== AuthorityMetadataSource.CACHE && endpointMetadataResult?.source !== AuthorityMetadataSource.CACHE) {
      metadataEntity.expiresAt = generateAuthorityMetadataExpiresAt();
      metadataEntity.canonical_authority = this.canonicalAuthority;
    }
    const cacheKey = this.cacheManager.generateAuthorityMetadataCacheKey(metadataEntity.preferred_cache);
    this.cacheManager.setAuthorityMetadata(cacheKey, metadataEntity);
    this.metadata = metadataEntity;
  }
  /**
   * Update AuthorityMetadataEntity with new endpoints and return where the information came from
   * @param metadataEntity
   */
  updateEndpointMetadata(metadataEntity) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityUpdateEndpointMetadata, this.correlationId);
      const localMetadata = this.updateEndpointMetadataFromLocalSources(metadataEntity);
      if (localMetadata) {
        if (localMetadata.source === AuthorityMetadataSource.HARDCODED_VALUES) {
          if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
            if (localMetadata.metadata) {
              const hardcodedMetadata = yield invokeAsync(this.updateMetadataWithRegionalInformation.bind(this), PerformanceEvents.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(localMetadata.metadata);
              updateAuthorityEndpointMetadata(metadataEntity, hardcodedMetadata, false);
              metadataEntity.canonical_authority = this.canonicalAuthority;
            }
          }
        }
        return localMetadata.source;
      }
      let metadata = yield invokeAsync(this.getEndpointMetadataFromNetwork.bind(this), PerformanceEvents.AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
      if (metadata) {
        if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
          metadata = yield invokeAsync(this.updateMetadataWithRegionalInformation.bind(this), PerformanceEvents.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(metadata);
        }
        updateAuthorityEndpointMetadata(metadataEntity, metadata, true);
        return AuthorityMetadataSource.NETWORK;
      } else {
        throw createClientAuthError(openIdConfigError, this.defaultOpenIdConfigurationEndpoint);
      }
    });
  }
  /**
   * Updates endpoint metadata from local sources and returns where the information was retrieved from and the metadata config
   * response if the source is hardcoded metadata
   * @param metadataEntity
   * @returns
   */
  updateEndpointMetadataFromLocalSources(metadataEntity) {
    this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
    const configMetadata = this.getEndpointMetadataFromConfig();
    if (configMetadata) {
      this.logger.verbose("Found endpoint metadata in authority configuration");
      updateAuthorityEndpointMetadata(metadataEntity, configMetadata, false);
      return {
        source: AuthorityMetadataSource.CONFIG
      };
    }
    this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values.");
    if (this.authorityOptions.skipAuthorityMetadataCache) {
      this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache.");
    } else {
      const hardcodedMetadata = this.getEndpointMetadataFromHardcodedValues();
      if (hardcodedMetadata) {
        updateAuthorityEndpointMetadata(metadataEntity, hardcodedMetadata, false);
        return {
          source: AuthorityMetadataSource.HARDCODED_VALUES,
          metadata: hardcodedMetadata
        };
      } else {
        this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.");
      }
    }
    const metadataEntityExpired = isAuthorityMetadataExpired(metadataEntity);
    if (this.isAuthoritySameType(metadataEntity) && metadataEntity.endpointsFromNetwork && !metadataEntityExpired) {
      this.logger.verbose("Found endpoint metadata in the cache.");
      return { source: AuthorityMetadataSource.CACHE };
    } else if (metadataEntityExpired) {
      this.logger.verbose("The metadata entity is expired.");
    }
    return null;
  }
  /**
   * Compares the number of url components after the domain to determine if the cached
   * authority metadata can be used for the requested authority. Protects against same domain different
   * authority such as login.microsoftonline.com/tenant and login.microsoftonline.com/tfp/tenant/policy
   * @param metadataEntity
   */
  isAuthoritySameType(metadataEntity) {
    const cachedAuthorityUrl = new UrlString(metadataEntity.canonical_authority);
    const cachedParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
    return cachedParts.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
  }
  /**
   * Parse authorityMetadata config option
   */
  getEndpointMetadataFromConfig() {
    if (this.authorityOptions.authorityMetadata) {
      try {
        return JSON.parse(this.authorityOptions.authorityMetadata);
      } catch (e) {
        throw createClientConfigurationError(invalidAuthorityMetadata);
      }
    }
    return null;
  }
  /**
   * Gets OAuth endpoints from the given OpenID configuration endpoint.
   *
   * @param hasHardcodedMetadata boolean
   */
  getEndpointMetadataFromNetwork() {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
      const options = {};
      const openIdConfigurationEndpoint = this.defaultOpenIdConfigurationEndpoint;
      this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${openIdConfigurationEndpoint}`);
      try {
        const response = yield this.networkInterface.sendGetRequestAsync(openIdConfigurationEndpoint, options);
        const isValidResponse = isOpenIdConfigResponse(response.body);
        if (isValidResponse) {
          return response.body;
        } else {
          this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration`);
          return null;
        }
      } catch (e) {
        this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${e}`);
        return null;
      }
    });
  }
  /**
   * Get OAuth endpoints for common authorities.
   */
  getEndpointMetadataFromHardcodedValues() {
    if (this.hostnameAndPort in EndpointMetadata) {
      return EndpointMetadata[this.hostnameAndPort];
    }
    return null;
  }
  /**
   * Update the retrieved metadata with regional information.
   * User selected Azure region will be used if configured.
   */
  updateMetadataWithRegionalInformation(metadata) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
      const userConfiguredAzureRegion = this.authorityOptions.azureRegionConfiguration?.azureRegion;
      if (userConfiguredAzureRegion) {
        if (userConfiguredAzureRegion !== Constants.AZURE_REGION_AUTO_DISCOVER_FLAG) {
          this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.CONFIGURED_NO_AUTO_DETECTION;
          this.regionDiscoveryMetadata.region_used = userConfiguredAzureRegion;
          return _Authority.replaceWithRegionalInformation(metadata, userConfiguredAzureRegion);
        }
        const autodetectedRegionName = yield invokeAsync(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), PerformanceEvents.RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
        if (autodetectedRegionName) {
          this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_SUCCESSFUL;
          this.regionDiscoveryMetadata.region_used = autodetectedRegionName;
          return _Authority.replaceWithRegionalInformation(metadata, autodetectedRegionName);
        }
        this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_FAILED;
      }
      return metadata;
    });
  }
  /**
   * Updates the AuthorityMetadataEntity with new aliases, preferred_network and preferred_cache
   * and returns where the information was retrieved from
   * @param metadataEntity
   * @returns AuthorityMetadataSource
   */
  updateCloudDiscoveryMetadata(metadataEntity) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
      const localMetadataSource = this.updateCloudDiscoveryMetadataFromLocalSources(metadataEntity);
      if (localMetadataSource) {
        return localMetadataSource;
      }
      const metadata = yield invokeAsync(this.getCloudDiscoveryMetadataFromNetwork.bind(this), PerformanceEvents.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
      if (metadata) {
        updateCloudDiscoveryMetadata(metadataEntity, metadata, true);
        return AuthorityMetadataSource.NETWORK;
      }
      throw createClientConfigurationError(untrustedAuthority);
    });
  }
  updateCloudDiscoveryMetadataFromLocalSources(metadataEntity) {
    this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration");
    this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities || Constants.NOT_APPLICABLE}`);
    this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata || Constants.NOT_APPLICABLE}`);
    this.logger.verbosePii(`Canonical Authority: ${metadataEntity.canonical_authority || Constants.NOT_APPLICABLE}`);
    const metadata = this.getCloudDiscoveryMetadataFromConfig();
    if (metadata) {
      this.logger.verbose("Found cloud discovery metadata in authority configuration");
      updateCloudDiscoveryMetadata(metadataEntity, metadata, false);
      return AuthorityMetadataSource.CONFIG;
    }
    this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values.");
    if (this.options.skipAuthorityMetadataCache) {
      this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache.");
    } else {
      const hardcodedMetadata = getCloudDiscoveryMetadataFromHardcodedValues(this.hostnameAndPort);
      if (hardcodedMetadata) {
        this.logger.verbose("Found cloud discovery metadata from hardcoded values.");
        updateCloudDiscoveryMetadata(metadataEntity, hardcodedMetadata, false);
        return AuthorityMetadataSource.HARDCODED_VALUES;
      }
      this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.");
    }
    const metadataEntityExpired = isAuthorityMetadataExpired(metadataEntity);
    if (this.isAuthoritySameType(metadataEntity) && metadataEntity.aliasesFromNetwork && !metadataEntityExpired) {
      this.logger.verbose("Found cloud discovery metadata in the cache.");
      return AuthorityMetadataSource.CACHE;
    } else if (metadataEntityExpired) {
      this.logger.verbose("The metadata entity is expired.");
    }
    return null;
  }
  /**
   * Parse cloudDiscoveryMetadata config or check knownAuthorities
   */
  getCloudDiscoveryMetadataFromConfig() {
    if (this.authorityType === AuthorityType.Ciam) {
      this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host.");
      return _Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    }
    if (this.authorityOptions.cloudDiscoveryMetadata) {
      this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
      try {
        this.logger.verbose("Attempting to parse the cloud discovery metadata.");
        const parsedResponse = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
        const metadata = getCloudDiscoveryMetadataFromNetworkResponse(parsedResponse.metadata, this.hostnameAndPort);
        this.logger.verbose("Parsed the cloud discovery metadata.");
        if (metadata) {
          this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata.");
          return metadata;
        } else {
          this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
        }
      } catch (e) {
        this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error.");
        throw createClientConfigurationError(invalidCloudDiscoveryMetadata);
      }
    }
    if (this.isInKnownAuthorities()) {
      this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host.");
      return _Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    }
    return null;
  }
  /**
   * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
   *
   * @param hasHardcodedMetadata boolean
   */
  getCloudDiscoveryMetadataFromNetwork() {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
      const instanceDiscoveryEndpoint = `${Constants.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`;
      const options = {};
      let match = null;
      try {
        const response = yield this.networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint, options);
        let typedResponseBody;
        let metadata;
        if (isCloudInstanceDiscoveryResponse(response.body)) {
          typedResponseBody = response.body;
          metadata = typedResponseBody.metadata;
          this.logger.verbosePii(`tenant_discovery_endpoint is: ${typedResponseBody.tenant_discovery_endpoint}`);
        } else if (isCloudInstanceDiscoveryErrorResponse(response.body)) {
          this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${response.status}`);
          typedResponseBody = response.body;
          if (typedResponseBody.error === Constants.INVALID_INSTANCE) {
            this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance.");
            return null;
          }
          this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${typedResponseBody.error}`);
          this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${typedResponseBody.error_description}`);
          this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []");
          metadata = [];
        } else {
          this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse");
          return null;
        }
        this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request.");
        match = getCloudDiscoveryMetadataFromNetworkResponse(metadata, this.hostnameAndPort);
      } catch (error) {
        if (error instanceof AuthError) {
          this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ${error.errorCode}
Error Description: ${error.errorMessage}`);
        } else {
          const typedError = error;
          this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ${typedError.name}
Error Description: ${typedError.message}`);
        }
        return null;
      }
      if (!match) {
        this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request.");
        this.logger.verbose("Creating custom Authority for custom domain scenario.");
        match = _Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
      }
      return match;
    });
  }
  /**
   * Helper function to determine if this host is included in the knownAuthorities config option
   */
  isInKnownAuthorities() {
    const matches = this.authorityOptions.knownAuthorities.filter((authority) => {
      return authority && UrlString.getDomainFromUrl(authority).toLowerCase() === this.hostnameAndPort;
    });
    return matches.length > 0;
  }
  /**
   * helper function to populate the authority based on azureCloudOptions
   * @param authorityString
   * @param azureCloudOptions
   */
  static generateAuthority(authorityString, azureCloudOptions) {
    let authorityAzureCloudInstance;
    if (azureCloudOptions && azureCloudOptions.azureCloudInstance !== AzureCloudInstance.None) {
      const tenant = azureCloudOptions.tenant ? azureCloudOptions.tenant : Constants.DEFAULT_COMMON_TENANT;
      authorityAzureCloudInstance = `${azureCloudOptions.azureCloudInstance}/${tenant}/`;
    }
    return authorityAzureCloudInstance ? authorityAzureCloudInstance : authorityString;
  }
  /**
   * Creates cloud discovery metadata object from a given host
   * @param host
   */
  static createCloudDiscoveryMetadataFromHost(host) {
    return {
      preferred_network: host,
      preferred_cache: host,
      aliases: [host]
    };
  }
  /**
   * helper function to generate environment from authority object
   */
  getPreferredCache() {
    if (this.managedIdentity) {
      return Constants.DEFAULT_AUTHORITY_HOST;
    } else if (this.discoveryComplete()) {
      return this.metadata.preferred_cache;
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  /**
   * Returns whether or not the provided host is an alias of this authority instance
   * @param host
   */
  isAlias(host) {
    return this.metadata.aliases.indexOf(host) > -1;
  }
  /**
   * Returns whether or not the provided host is an alias of a known Microsoft authority for purposes of endpoint discovery
   * @param host
   */
  isAliasOfKnownMicrosoftAuthority(host) {
    return InstanceDiscoveryMetadataAliases.has(host);
  }
  /**
   * Checks whether the provided host is that of a public cloud authority
   *
   * @param authority string
   * @returns bool
   */
  static isPublicCloudAuthority(host) {
    return Constants.KNOWN_PUBLIC_CLOUDS.indexOf(host) >= 0;
  }
  /**
   * Rebuild the authority string with the region
   *
   * @param host string
   * @param region string
   */
  static buildRegionalAuthorityString(host, region, queryString) {
    const authorityUrlInstance = new UrlString(host);
    authorityUrlInstance.validateAsUri();
    const authorityUrlParts = authorityUrlInstance.getUrlComponents();
    let hostNameAndPort = `${region}.${authorityUrlParts.HostNameAndPort}`;
    if (this.isPublicCloudAuthority(authorityUrlParts.HostNameAndPort)) {
      hostNameAndPort = `${region}.${Constants.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`;
    }
    const url = UrlString.constructAuthorityUriFromObject(__spreadProps(__spreadValues({}, authorityUrlInstance.getUrlComponents()), {
      HostNameAndPort: hostNameAndPort
    })).urlString;
    if (queryString)
      return `${url}?${queryString}`;
    return url;
  }
  /**
   * Replace the endpoints in the metadata object with their regional equivalents.
   *
   * @param metadata OpenIdConfigResponse
   * @param azureRegion string
   */
  static replaceWithRegionalInformation(metadata, azureRegion) {
    const regionalMetadata = __spreadValues({}, metadata);
    regionalMetadata.authorization_endpoint = _Authority.buildRegionalAuthorityString(regionalMetadata.authorization_endpoint, azureRegion);
    regionalMetadata.token_endpoint = _Authority.buildRegionalAuthorityString(regionalMetadata.token_endpoint, azureRegion);
    if (regionalMetadata.end_session_endpoint) {
      regionalMetadata.end_session_endpoint = _Authority.buildRegionalAuthorityString(regionalMetadata.end_session_endpoint, azureRegion);
    }
    return regionalMetadata;
  }
  /**
   * Transform CIAM_AUTHORIY as per the below rules:
   * If no path segments found and it is a CIAM authority (hostname ends with .ciamlogin.com), then transform it
   *
   * NOTE: The transformation path should go away once STS supports CIAM with the format: `tenantIdorDomain.ciamlogin.com`
   * `ciamlogin.com` can also change in the future and we should accommodate the same
   *
   * @param authority
   */
  static transformCIAMAuthority(authority) {
    let ciamAuthority = authority;
    const authorityUrl = new UrlString(authority);
    const authorityUrlComponents = authorityUrl.getUrlComponents();
    if (authorityUrlComponents.PathSegments.length === 0 && authorityUrlComponents.HostNameAndPort.endsWith(Constants.CIAM_AUTH_URL)) {
      const tenantIdOrDomain = authorityUrlComponents.HostNameAndPort.split(".")[0];
      ciamAuthority = `${ciamAuthority}${tenantIdOrDomain}${Constants.AAD_TENANT_DOMAIN_SUFFIX}`;
    }
    return ciamAuthority;
  }
};
Authority.reservedTenantDomains = /* @__PURE__ */ new Set([
  "{tenant}",
  "{tenantid}",
  AADAuthorityConstants.COMMON,
  AADAuthorityConstants.CONSUMERS,
  AADAuthorityConstants.ORGANIZATIONS
]);
function getTenantFromAuthorityString(authority) {
  const authorityUrl = new UrlString(authority);
  const authorityUrlComponents = authorityUrl.getUrlComponents();
  const tenantId = authorityUrlComponents.PathSegments.slice(-1)[0]?.toLowerCase();
  switch (tenantId) {
    case AADAuthorityConstants.COMMON:
    case AADAuthorityConstants.ORGANIZATIONS:
    case AADAuthorityConstants.CONSUMERS:
      return void 0;
    default:
      return tenantId;
  }
}
function formatAuthorityUri(authorityUri) {
  return authorityUri.endsWith(Constants.FORWARD_SLASH) ? authorityUri : `${authorityUri}${Constants.FORWARD_SLASH}`;
}
function buildStaticAuthorityOptions(authOptions) {
  const rawCloudDiscoveryMetadata = authOptions.cloudDiscoveryMetadata;
  let cloudDiscoveryMetadata = void 0;
  if (rawCloudDiscoveryMetadata) {
    try {
      cloudDiscoveryMetadata = JSON.parse(rawCloudDiscoveryMetadata);
    } catch (e) {
      throw createClientConfigurationError(invalidCloudDiscoveryMetadata);
    }
  }
  return {
    canonicalAuthority: authOptions.authority ? formatAuthorityUri(authOptions.authority) : void 0,
    knownAuthorities: authOptions.knownAuthorities,
    cloudDiscoveryMetadata
  };
}

// node_modules/@azure/msal-common/dist/error/InteractionRequiredAuthErrorCodes.mjs
var InteractionRequiredAuthErrorCodes_exports = {};
__export(InteractionRequiredAuthErrorCodes_exports, {
  badToken: () => badToken,
  consentRequired: () => consentRequired,
  interactionRequired: () => interactionRequired,
  loginRequired: () => loginRequired,
  nativeAccountUnavailable: () => nativeAccountUnavailable,
  noTokensFound: () => noTokensFound,
  refreshTokenExpired: () => refreshTokenExpired
});
var noTokensFound = "no_tokens_found";
var nativeAccountUnavailable = "native_account_unavailable";
var refreshTokenExpired = "refresh_token_expired";
var interactionRequired = "interaction_required";
var consentRequired = "consent_required";
var loginRequired = "login_required";
var badToken = "bad_token";

// node_modules/@azure/msal-common/dist/error/InteractionRequiredAuthError.mjs
var InteractionRequiredServerErrorMessage = [
  interactionRequired,
  consentRequired,
  loginRequired,
  badToken
];
var InteractionRequiredAuthSubErrorMessage = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required",
  "bad_token"
];
var InteractionRequiredAuthErrorMessages = {
  [noTokensFound]: "No refresh token found in the cache. Please sign-in.",
  [nativeAccountUnavailable]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.",
  [refreshTokenExpired]: "Refresh token has expired.",
  [badToken]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve."
};
var InteractionRequiredAuthErrorMessage = {
  noTokensFoundError: {
    code: noTokensFound,
    desc: InteractionRequiredAuthErrorMessages[noTokensFound]
  },
  native_account_unavailable: {
    code: nativeAccountUnavailable,
    desc: InteractionRequiredAuthErrorMessages[nativeAccountUnavailable]
  },
  bad_token: {
    code: badToken,
    desc: InteractionRequiredAuthErrorMessages[badToken]
  }
};
var InteractionRequiredAuthError = class _InteractionRequiredAuthError extends AuthError {
  constructor(errorCode, errorMessage, subError, timestamp, traceId, correlationId, claims, errorNo) {
    super(errorCode, errorMessage, subError);
    Object.setPrototypeOf(this, _InteractionRequiredAuthError.prototype);
    this.timestamp = timestamp || Constants.EMPTY_STRING;
    this.traceId = traceId || Constants.EMPTY_STRING;
    this.correlationId = correlationId || Constants.EMPTY_STRING;
    this.claims = claims || Constants.EMPTY_STRING;
    this.name = "InteractionRequiredAuthError";
    this.errorNo = errorNo;
  }
};
function isInteractionRequiredError(errorCode, errorString, subError) {
  const isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredServerErrorMessage.indexOf(errorCode) > -1;
  const isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
  const isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredServerErrorMessage.some((irErrorCode) => {
    return errorString.indexOf(irErrorCode) > -1;
  });
  return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
}
function createInteractionRequiredAuthError(errorCode) {
  return new InteractionRequiredAuthError(errorCode, InteractionRequiredAuthErrorMessages[errorCode]);
}

// node_modules/@azure/msal-common/dist/request/AuthenticationHeaderParser.mjs
var AuthenticationHeaderParser = class {
  constructor(headers) {
    this.headers = headers;
  }
  /**
   * This method parses the SHR nonce value out of either the Authentication-Info or WWW-Authenticate authentication headers.
   * @returns
   */
  getShrNonce() {
    const authenticationInfo = this.headers[HeaderNames.AuthenticationInfo];
    if (authenticationInfo) {
      const authenticationInfoChallenges = this.parseChallenges(authenticationInfo);
      if (authenticationInfoChallenges.nextnonce) {
        return authenticationInfoChallenges.nextnonce;
      }
      throw createClientConfigurationError(invalidAuthenticationHeader);
    }
    const wwwAuthenticate = this.headers[HeaderNames.WWWAuthenticate];
    if (wwwAuthenticate) {
      const wwwAuthenticateChallenges = this.parseChallenges(wwwAuthenticate);
      if (wwwAuthenticateChallenges.nonce) {
        return wwwAuthenticateChallenges.nonce;
      }
      throw createClientConfigurationError(invalidAuthenticationHeader);
    }
    throw createClientConfigurationError(missingNonceAuthenticationHeader);
  }
  /**
   * Parses an HTTP header's challenge set into a key/value map.
   * @param header
   * @returns
   */
  parseChallenges(header) {
    const schemeSeparator = header.indexOf(" ");
    const challenges = header.substr(schemeSeparator + 1).split(",");
    const challengeMap = {};
    challenges.forEach((challenge) => {
      const [key, value] = challenge.split("=");
      challengeMap[key] = unescape(value.replace(/['"]+/g, Constants.EMPTY_STRING));
    });
    return challengeMap;
  }
};

// node_modules/@azure/msal-common/dist/telemetry/performance/StubPerformanceClient.mjs
var StubPerformanceMeasurement = class {
  startMeasurement() {
    return;
  }
  endMeasurement() {
    return;
  }
  flushMeasurement() {
    return null;
  }
};
var StubPerformanceClient = class {
  generateId() {
    return "callback-id";
  }
  startMeasurement(measureName, correlationId) {
    return {
      end: () => null,
      discard: () => {
      },
      add: () => {
      },
      increment: () => {
      },
      event: {
        eventId: this.generateId(),
        status: PerformanceEventStatus.InProgress,
        authority: "",
        libraryName: "",
        libraryVersion: "",
        clientId: "",
        name: measureName,
        startTimeMs: Date.now(),
        correlationId: correlationId || ""
      },
      measurement: new StubPerformanceMeasurement()
    };
  }
  startPerformanceMeasurement() {
    return new StubPerformanceMeasurement();
  }
  calculateQueuedTime() {
    return 0;
  }
  addQueueMeasurement() {
    return;
  }
  setPreQueueTime() {
    return;
  }
  endMeasurement() {
    return null;
  }
  discardMeasurements() {
    return;
  }
  removePerformanceCallback() {
    return true;
  }
  addPerformanceCallback() {
    return "";
  }
  emitEvents() {
    return;
  }
  addFields() {
    return;
  }
  incrementFields() {
    return;
  }
  cacheEventByCorrelationId() {
    return;
  }
};

// node_modules/@azure/msal-common/dist/packageMetadata.mjs
var name = "@azure/msal-common";
var version = "14.10.0";

// node_modules/@azure/msal-common/dist/request/ScopeSet.mjs
var ScopeSet = class _ScopeSet {
  constructor(inputScopes) {
    const scopeArr = inputScopes ? StringUtils.trimArrayEntries([...inputScopes]) : [];
    const filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
    this.validateInputScopes(filteredInput);
    this.scopes = /* @__PURE__ */ new Set();
    filteredInput.forEach((scope) => this.scopes.add(scope));
  }
  /**
   * Factory method to create ScopeSet from space-delimited string
   * @param inputScopeString
   * @param appClientId
   * @param scopesRequired
   */
  static fromString(inputScopeString) {
    const scopeString = inputScopeString || Constants.EMPTY_STRING;
    const inputScopes = scopeString.split(" ");
    return new _ScopeSet(inputScopes);
  }
  /**
   * Creates the set of scopes to search for in cache lookups
   * @param inputScopeString
   * @returns
   */
  static createSearchScopes(inputScopeString) {
    const scopeSet = new _ScopeSet(inputScopeString);
    if (!scopeSet.containsOnlyOIDCScopes()) {
      scopeSet.removeOIDCScopes();
    } else {
      scopeSet.removeScope(Constants.OFFLINE_ACCESS_SCOPE);
    }
    return scopeSet;
  }
  /**
   * Used to validate the scopes input parameter requested  by the developer.
   * @param {Array<string>} inputScopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
   * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
   */
  validateInputScopes(inputScopes) {
    if (!inputScopes || inputScopes.length < 1) {
      throw createClientConfigurationError(emptyInputScopesError);
    }
  }
  /**
   * Check if a given scope is present in this set of scopes.
   * @param scope
   */
  containsScope(scope) {
    const lowerCaseScopes = this.printScopesLowerCase().split(" ");
    const lowerCaseScopesSet = new _ScopeSet(lowerCaseScopes);
    return scope ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
  }
  /**
   * Check if a set of scopes is present in this set of scopes.
   * @param scopeSet
   */
  containsScopeSet(scopeSet) {
    if (!scopeSet || scopeSet.scopes.size <= 0) {
      return false;
    }
    return this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every((scope) => this.containsScope(scope));
  }
  /**
   * Check if set of scopes contains only the defaults
   */
  containsOnlyOIDCScopes() {
    let defaultScopeCount = 0;
    OIDC_SCOPES.forEach((defaultScope) => {
      if (this.containsScope(defaultScope)) {
        defaultScopeCount += 1;
      }
    });
    return this.scopes.size === defaultScopeCount;
  }
  /**
   * Appends single scope if passed
   * @param newScope
   */
  appendScope(newScope) {
    if (newScope) {
      this.scopes.add(newScope.trim());
    }
  }
  /**
   * Appends multiple scopes if passed
   * @param newScopes
   */
  appendScopes(newScopes) {
    try {
      newScopes.forEach((newScope) => this.appendScope(newScope));
    } catch (e) {
      throw createClientAuthError(cannotAppendScopeSet);
    }
  }
  /**
   * Removes element from set of scopes.
   * @param scope
   */
  removeScope(scope) {
    if (!scope) {
      throw createClientAuthError(cannotRemoveEmptyScope);
    }
    this.scopes.delete(scope.trim());
  }
  /**
   * Removes default scopes from set of scopes
   * Primarily used to prevent cache misses if the default scopes are not returned from the server
   */
  removeOIDCScopes() {
    OIDC_SCOPES.forEach((defaultScope) => {
      this.scopes.delete(defaultScope);
    });
  }
  /**
   * Combines an array of scopes with the current set of scopes.
   * @param otherScopes
   */
  unionScopeSets(otherScopes) {
    if (!otherScopes) {
      throw createClientAuthError(emptyInputScopeSet);
    }
    const unionScopes = /* @__PURE__ */ new Set();
    otherScopes.scopes.forEach((scope) => unionScopes.add(scope.toLowerCase()));
    this.scopes.forEach((scope) => unionScopes.add(scope.toLowerCase()));
    return unionScopes;
  }
  /**
   * Check if scopes intersect between this set and another.
   * @param otherScopes
   */
  intersectingScopeSets(otherScopes) {
    if (!otherScopes) {
      throw createClientAuthError(emptyInputScopeSet);
    }
    if (!otherScopes.containsOnlyOIDCScopes()) {
      otherScopes.removeOIDCScopes();
    }
    const unionScopes = this.unionScopeSets(otherScopes);
    const sizeOtherScopes = otherScopes.getScopeCount();
    const sizeThisScopes = this.getScopeCount();
    const sizeUnionScopes = unionScopes.size;
    return sizeUnionScopes < sizeThisScopes + sizeOtherScopes;
  }
  /**
   * Returns size of set of scopes.
   */
  getScopeCount() {
    return this.scopes.size;
  }
  /**
   * Returns the scopes as an array of string values
   */
  asArray() {
    const array = [];
    this.scopes.forEach((val) => array.push(val));
    return array;
  }
  /**
   * Prints scopes into a space-delimited string
   */
  printScopes() {
    if (this.scopes) {
      const scopeArr = this.asArray();
      return scopeArr.join(" ");
    }
    return Constants.EMPTY_STRING;
  }
  /**
   * Prints scopes into a space-delimited lower-case string (used for caching)
   */
  printScopesLowerCase() {
    return this.printScopes().toLowerCase();
  }
};

// node_modules/@azure/msal-common/dist/error/CacheErrorCodes.mjs
var cacheQuotaExceededErrorCode = "cache_quota_exceeded";
var cacheUnknownErrorCode = "cache_error_unknown";

// node_modules/@azure/msal-common/dist/error/CacheError.mjs
var CacheErrorMessages = {
  [cacheQuotaExceededErrorCode]: "Exceeded cache storage capacity.",
  [cacheUnknownErrorCode]: "Unexpected error occurred when using cache storage."
};
var CacheError = class _CacheError extends Error {
  constructor(errorCode, errorMessage) {
    const message = errorMessage || (CacheErrorMessages[errorCode] ? CacheErrorMessages[errorCode] : CacheErrorMessages[cacheUnknownErrorCode]);
    super(`${errorCode}: ${message}`);
    Object.setPrototypeOf(this, _CacheError.prototype);
    this.name = "CacheError";
    this.errorCode = errorCode;
    this.errorMessage = message;
  }
};

// node_modules/@azure/msal-common/dist/cache/CacheManager.mjs
var CacheManager = class _CacheManager {
  constructor(clientId, cryptoImpl, logger, staticAuthorityOptions) {
    this.clientId = clientId;
    this.cryptoImpl = cryptoImpl;
    this.commonLogger = logger.clone(name, version);
    this.staticAuthorityOptions = staticAuthorityOptions;
  }
  /**
   * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
   * @param accountFilter - (Optional) filter to narrow down the accounts returned
   * @returns Array of AccountInfo objects in cache
   */
  getAllAccounts(accountFilter) {
    return this.buildTenantProfiles(this.getAccountsFilteredBy(accountFilter || {}), accountFilter);
  }
  /**
   * Gets first tenanted AccountInfo object found based on provided filters
   */
  getAccountInfoFilteredBy(accountFilter) {
    const allAccounts = this.getAllAccounts(accountFilter);
    if (allAccounts.length > 1) {
      const sortedAccounts = allAccounts.sort((account) => {
        return account.idTokenClaims ? -1 : 1;
      });
      return sortedAccounts[0];
    } else if (allAccounts.length === 1) {
      return allAccounts[0];
    } else {
      return null;
    }
  }
  /**
   * Returns a single matching
   * @param accountFilter
   * @returns
   */
  getBaseAccountInfo(accountFilter) {
    const accountEntities = this.getAccountsFilteredBy(accountFilter);
    if (accountEntities.length > 0) {
      return accountEntities[0].getAccountInfo();
    } else {
      return null;
    }
  }
  /**
   * Matches filtered account entities with cached ID tokens that match the tenant profile-specific account filters
   * and builds the account info objects from the matching ID token's claims
   * @param cachedAccounts
   * @param accountFilter
   * @returns Array of AccountInfo objects that match account and tenant profile filters
   */
  buildTenantProfiles(cachedAccounts, accountFilter) {
    return cachedAccounts.flatMap((accountEntity) => {
      return this.getAccountInfoForTenantProfiles(accountEntity, accountFilter);
    });
  }
  getAccountInfoForTenantProfiles(accountEntity, accountFilter) {
    return this.getTenantProfilesFromAccountEntity(accountEntity, accountFilter?.tenantId, accountFilter);
  }
  getTenantedAccountInfoByFilter(accountInfo, tokenKeys, tenantProfile, tenantProfileFilter) {
    let tenantedAccountInfo = null;
    let idTokenClaims;
    if (tenantProfileFilter) {
      if (!this.tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter)) {
        return null;
      }
    }
    const idToken = this.getIdToken(accountInfo, tokenKeys, tenantProfile.tenantId);
    if (idToken) {
      idTokenClaims = extractTokenClaims(idToken.secret, this.cryptoImpl.base64Decode);
      if (!this.idTokenClaimsMatchTenantProfileFilter(idTokenClaims, tenantProfileFilter)) {
        return null;
      }
    }
    tenantedAccountInfo = updateAccountTenantProfileData(accountInfo, tenantProfile, idTokenClaims, idToken?.secret);
    return tenantedAccountInfo;
  }
  getTenantProfilesFromAccountEntity(accountEntity, targetTenantId, tenantProfileFilter) {
    const accountInfo = accountEntity.getAccountInfo();
    let searchTenantProfiles = accountInfo.tenantProfiles || /* @__PURE__ */ new Map();
    const tokenKeys = this.getTokenKeys();
    if (targetTenantId) {
      const tenantProfile = searchTenantProfiles.get(targetTenantId);
      if (tenantProfile) {
        searchTenantProfiles = /* @__PURE__ */ new Map([
          [targetTenantId, tenantProfile]
        ]);
      } else {
        return [];
      }
    }
    const matchingTenantProfiles = [];
    searchTenantProfiles.forEach((tenantProfile) => {
      const tenantedAccountInfo = this.getTenantedAccountInfoByFilter(accountInfo, tokenKeys, tenantProfile, tenantProfileFilter);
      if (tenantedAccountInfo) {
        matchingTenantProfiles.push(tenantedAccountInfo);
      }
    });
    return matchingTenantProfiles;
  }
  tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter) {
    if (!!tenantProfileFilter.localAccountId && !this.matchLocalAccountIdFromTenantProfile(tenantProfile, tenantProfileFilter.localAccountId)) {
      return false;
    }
    if (!!tenantProfileFilter.name && !(tenantProfile.name === tenantProfileFilter.name)) {
      return false;
    }
    if (tenantProfileFilter.isHomeTenant !== void 0 && !(tenantProfile.isHomeTenant === tenantProfileFilter.isHomeTenant)) {
      return false;
    }
    return true;
  }
  idTokenClaimsMatchTenantProfileFilter(idTokenClaims, tenantProfileFilter) {
    if (tenantProfileFilter) {
      if (!!tenantProfileFilter.localAccountId && !this.matchLocalAccountIdFromTokenClaims(idTokenClaims, tenantProfileFilter.localAccountId)) {
        return false;
      }
      if (!!tenantProfileFilter.loginHint && !this.matchLoginHintFromTokenClaims(idTokenClaims, tenantProfileFilter.loginHint)) {
        return false;
      }
      if (!!tenantProfileFilter.username && !this.matchUsername(idTokenClaims.preferred_username, tenantProfileFilter.username)) {
        return false;
      }
      if (!!tenantProfileFilter.name && !this.matchName(idTokenClaims, tenantProfileFilter.name)) {
        return false;
      }
      if (!!tenantProfileFilter.sid && !this.matchSid(idTokenClaims, tenantProfileFilter.sid)) {
        return false;
      }
    }
    return true;
  }
  /**
   * saves a cache record
   * @param cacheRecord {CacheRecord}
   * @param storeInCache {?StoreInCache}
   * @param correlationId {?string} correlation id
   */
  saveCacheRecord(cacheRecord, storeInCache, correlationId) {
    return __async(this, null, function* () {
      if (!cacheRecord) {
        throw createClientAuthError(invalidCacheRecord);
      }
      try {
        if (!!cacheRecord.account) {
          this.setAccount(cacheRecord.account);
        }
        if (!!cacheRecord.idToken && storeInCache?.idToken !== false) {
          this.setIdTokenCredential(cacheRecord.idToken);
        }
        if (!!cacheRecord.accessToken && storeInCache?.accessToken !== false) {
          yield this.saveAccessToken(cacheRecord.accessToken);
        }
        if (!!cacheRecord.refreshToken && storeInCache?.refreshToken !== false) {
          this.setRefreshTokenCredential(cacheRecord.refreshToken);
        }
        if (!!cacheRecord.appMetadata) {
          this.setAppMetadata(cacheRecord.appMetadata);
        }
      } catch (e) {
        this.commonLogger?.error(`CacheManager.saveCacheRecord: failed`);
        if (e instanceof Error) {
          this.commonLogger?.errorPii(`CacheManager.saveCacheRecord: ${e.message}`, correlationId);
          if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.message.includes("exceeded the quota")) {
            this.commonLogger?.error(`CacheManager.saveCacheRecord: exceeded storage quota`, correlationId);
            throw new CacheError(cacheQuotaExceededErrorCode);
          } else {
            throw new CacheError(e.name, e.message);
          }
        } else {
          this.commonLogger?.errorPii(`CacheManager.saveCacheRecord: ${e}`, correlationId);
          throw new CacheError(cacheUnknownErrorCode);
        }
      }
    });
  }
  /**
   * saves access token credential
   * @param credential
   */
  saveAccessToken(credential) {
    return __async(this, null, function* () {
      const accessTokenFilter = {
        clientId: credential.clientId,
        credentialType: credential.credentialType,
        environment: credential.environment,
        homeAccountId: credential.homeAccountId,
        realm: credential.realm,
        tokenType: credential.tokenType,
        requestedClaimsHash: credential.requestedClaimsHash
      };
      const tokenKeys = this.getTokenKeys();
      const currentScopes = ScopeSet.fromString(credential.target);
      const removedAccessTokens = [];
      tokenKeys.accessToken.forEach((key) => {
        if (!this.accessTokenKeyMatchesFilter(key, accessTokenFilter, false)) {
          return;
        }
        const tokenEntity = this.getAccessTokenCredential(key);
        if (tokenEntity && this.credentialMatchesFilter(tokenEntity, accessTokenFilter)) {
          const tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
          if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
            removedAccessTokens.push(this.removeAccessToken(key));
          }
        }
      });
      yield Promise.all(removedAccessTokens);
      this.setAccessTokenCredential(credential);
    });
  }
  /**
   * Retrieve account entities matching all provided tenant-agnostic filters; if no filter is set, get all account entities in the cache
   * Not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
   * @param accountFilter - An object containing Account properties to filter by
   */
  getAccountsFilteredBy(accountFilter) {
    const allAccountKeys = this.getAccountKeys();
    const matchingAccounts = [];
    allAccountKeys.forEach((cacheKey) => {
      if (!this.isAccountKey(cacheKey, accountFilter.homeAccountId)) {
        return;
      }
      const entity = this.getAccount(cacheKey, this.commonLogger);
      if (!entity) {
        return;
      }
      if (!!accountFilter.homeAccountId && !this.matchHomeAccountId(entity, accountFilter.homeAccountId)) {
        return;
      }
      if (!!accountFilter.username && !this.matchUsername(entity.username, accountFilter.username)) {
        return;
      }
      if (!!accountFilter.environment && !this.matchEnvironment(entity, accountFilter.environment)) {
        return;
      }
      if (!!accountFilter.realm && !this.matchRealm(entity, accountFilter.realm)) {
        return;
      }
      if (!!accountFilter.nativeAccountId && !this.matchNativeAccountId(entity, accountFilter.nativeAccountId)) {
        return;
      }
      if (!!accountFilter.authorityType && !this.matchAuthorityType(entity, accountFilter.authorityType)) {
        return;
      }
      const tenantProfileFilter = {
        localAccountId: accountFilter?.localAccountId,
        name: accountFilter?.name
      };
      const matchingTenantProfiles = entity.tenantProfiles?.filter((tenantProfile) => {
        return this.tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter);
      });
      if (matchingTenantProfiles && matchingTenantProfiles.length === 0) {
        return;
      }
      matchingAccounts.push(entity);
    });
    return matchingAccounts;
  }
  /**
   * Returns true if the given key matches our account key schema. Also matches homeAccountId and/or tenantId if provided
   * @param key
   * @param homeAccountId
   * @param tenantId
   * @returns
   */
  isAccountKey(key, homeAccountId, tenantId) {
    if (key.split(Separators.CACHE_KEY_SEPARATOR).length < 3) {
      return false;
    }
    if (homeAccountId && !key.toLowerCase().includes(homeAccountId.toLowerCase())) {
      return false;
    }
    if (tenantId && !key.toLowerCase().includes(tenantId.toLowerCase())) {
      return false;
    }
    return true;
  }
  /**
   * Returns true if the given key matches our credential key schema.
   * @param key
   */
  isCredentialKey(key) {
    if (key.split(Separators.CACHE_KEY_SEPARATOR).length < 6) {
      return false;
    }
    const lowerCaseKey = key.toLowerCase();
    if (lowerCaseKey.indexOf(CredentialType.ID_TOKEN.toLowerCase()) === -1 && lowerCaseKey.indexOf(CredentialType.ACCESS_TOKEN.toLowerCase()) === -1 && lowerCaseKey.indexOf(CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && lowerCaseKey.indexOf(CredentialType.REFRESH_TOKEN.toLowerCase()) === -1) {
      return false;
    }
    if (lowerCaseKey.indexOf(CredentialType.REFRESH_TOKEN.toLowerCase()) > -1) {
      const clientIdValidation = `${CredentialType.REFRESH_TOKEN}${Separators.CACHE_KEY_SEPARATOR}${this.clientId}${Separators.CACHE_KEY_SEPARATOR}`;
      const familyIdValidation = `${CredentialType.REFRESH_TOKEN}${Separators.CACHE_KEY_SEPARATOR}${THE_FAMILY_ID}${Separators.CACHE_KEY_SEPARATOR}`;
      if (lowerCaseKey.indexOf(clientIdValidation.toLowerCase()) === -1 && lowerCaseKey.indexOf(familyIdValidation.toLowerCase()) === -1) {
        return false;
      }
    } else if (lowerCaseKey.indexOf(this.clientId.toLowerCase()) === -1) {
      return false;
    }
    return true;
  }
  /**
   * Returns whether or not the given credential entity matches the filter
   * @param entity
   * @param filter
   * @returns
   */
  credentialMatchesFilter(entity, filter) {
    if (!!filter.clientId && !this.matchClientId(entity, filter.clientId)) {
      return false;
    }
    if (!!filter.userAssertionHash && !this.matchUserAssertionHash(entity, filter.userAssertionHash)) {
      return false;
    }
    if (typeof filter.homeAccountId === "string" && !this.matchHomeAccountId(entity, filter.homeAccountId)) {
      return false;
    }
    if (!!filter.environment && !this.matchEnvironment(entity, filter.environment)) {
      return false;
    }
    if (!!filter.realm && !this.matchRealm(entity, filter.realm)) {
      return false;
    }
    if (!!filter.credentialType && !this.matchCredentialType(entity, filter.credentialType)) {
      return false;
    }
    if (!!filter.familyId && !this.matchFamilyId(entity, filter.familyId)) {
      return false;
    }
    if (!!filter.target && !this.matchTarget(entity, filter.target)) {
      return false;
    }
    if (filter.requestedClaimsHash || entity.requestedClaimsHash) {
      if (entity.requestedClaimsHash !== filter.requestedClaimsHash) {
        return false;
      }
    }
    if (entity.credentialType === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
      if (!!filter.tokenType && !this.matchTokenType(entity, filter.tokenType)) {
        return false;
      }
      if (filter.tokenType === AuthenticationScheme.SSH) {
        if (filter.keyId && !this.matchKeyId(entity, filter.keyId)) {
          return false;
        }
      }
    }
    return true;
  }
  /**
   * retrieve appMetadata matching all provided filters; if no filter is set, get all appMetadata
   * @param filter
   */
  getAppMetadataFilteredBy(filter) {
    const allCacheKeys = this.getKeys();
    const matchingAppMetadata = {};
    allCacheKeys.forEach((cacheKey) => {
      if (!this.isAppMetadata(cacheKey)) {
        return;
      }
      const entity = this.getAppMetadata(cacheKey);
      if (!entity) {
        return;
      }
      if (!!filter.environment && !this.matchEnvironment(entity, filter.environment)) {
        return;
      }
      if (!!filter.clientId && !this.matchClientId(entity, filter.clientId)) {
        return;
      }
      matchingAppMetadata[cacheKey] = entity;
    });
    return matchingAppMetadata;
  }
  /**
   * retrieve authorityMetadata that contains a matching alias
   * @param filter
   */
  getAuthorityMetadataByAlias(host) {
    const allCacheKeys = this.getAuthorityMetadataKeys();
    let matchedEntity = null;
    allCacheKeys.forEach((cacheKey) => {
      if (!this.isAuthorityMetadata(cacheKey) || cacheKey.indexOf(this.clientId) === -1) {
        return;
      }
      const entity = this.getAuthorityMetadata(cacheKey);
      if (!entity) {
        return;
      }
      if (entity.aliases.indexOf(host) === -1) {
        return;
      }
      matchedEntity = entity;
    });
    return matchedEntity;
  }
  /**
   * Removes all accounts and related tokens from cache.
   */
  removeAllAccounts() {
    return __async(this, null, function* () {
      const allAccountKeys = this.getAccountKeys();
      const removedAccounts = [];
      allAccountKeys.forEach((cacheKey) => {
        removedAccounts.push(this.removeAccount(cacheKey));
      });
      yield Promise.all(removedAccounts);
    });
  }
  /**
   * Removes the account and related tokens for a given account key
   * @param account
   */
  removeAccount(accountKey) {
    return __async(this, null, function* () {
      const account = this.getAccount(accountKey, this.commonLogger);
      if (!account) {
        return;
      }
      yield this.removeAccountContext(account);
      this.removeItem(accountKey);
    });
  }
  /**
   * Removes credentials associated with the provided account
   * @param account
   */
  removeAccountContext(account) {
    return __async(this, null, function* () {
      const allTokenKeys = this.getTokenKeys();
      const accountId = account.generateAccountId();
      const removedCredentials = [];
      allTokenKeys.idToken.forEach((key) => {
        if (key.indexOf(accountId) === 0) {
          this.removeIdToken(key);
        }
      });
      allTokenKeys.accessToken.forEach((key) => {
        if (key.indexOf(accountId) === 0) {
          removedCredentials.push(this.removeAccessToken(key));
        }
      });
      allTokenKeys.refreshToken.forEach((key) => {
        if (key.indexOf(accountId) === 0) {
          this.removeRefreshToken(key);
        }
      });
      yield Promise.all(removedCredentials);
    });
  }
  /**
   * Migrates a single-tenant account and all it's associated alternate cross-tenant account objects in the
   * cache into a condensed multi-tenant account object with tenant profiles.
   * @param accountKey
   * @param accountEntity
   * @param logger
   * @returns
   */
  updateOutdatedCachedAccount(accountKey, accountEntity, logger) {
    if (accountEntity && accountEntity.isSingleTenant()) {
      this.commonLogger?.verbose("updateOutdatedCachedAccount: Found a single-tenant (outdated) account entity in the cache, migrating to multi-tenant account entity");
      const matchingAccountKeys = this.getAccountKeys().filter((key) => {
        return key.startsWith(accountEntity.homeAccountId);
      });
      const accountsToMerge = [];
      matchingAccountKeys.forEach((key) => {
        const account = this.getCachedAccountEntity(key);
        if (account) {
          accountsToMerge.push(account);
        }
      });
      const baseAccount = accountsToMerge.find((account) => {
        return tenantIdMatchesHomeTenant(account.realm, account.homeAccountId);
      }) || accountsToMerge[0];
      baseAccount.tenantProfiles = accountsToMerge.map((account) => {
        return {
          tenantId: account.realm,
          localAccountId: account.localAccountId,
          name: account.name,
          isHomeTenant: tenantIdMatchesHomeTenant(account.realm, account.homeAccountId)
        };
      });
      const updatedAccount = _CacheManager.toObject(new AccountEntity(), __spreadValues({}, baseAccount));
      const newAccountKey = updatedAccount.generateAccountKey();
      matchingAccountKeys.forEach((key) => {
        if (key !== newAccountKey) {
          this.removeOutdatedAccount(accountKey);
        }
      });
      this.setAccount(updatedAccount);
      logger?.verbose("Updated an outdated account entity in the cache");
      return updatedAccount;
    }
    return accountEntity;
  }
  /**
   * returns a boolean if the given credential is removed
   * @param credential
   */
  removeAccessToken(key) {
    return __async(this, null, function* () {
      const credential = this.getAccessTokenCredential(key);
      if (!credential) {
        return;
      }
      if (credential.credentialType.toLowerCase() === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) {
        if (credential.tokenType === AuthenticationScheme.POP) {
          const accessTokenWithAuthSchemeEntity = credential;
          const kid = accessTokenWithAuthSchemeEntity.keyId;
          if (kid) {
            try {
              yield this.cryptoImpl.removeTokenBindingKey(kid);
            } catch (error) {
              throw createClientAuthError(bindingKeyNotRemoved);
            }
          }
        }
      }
      return this.removeItem(key);
    });
  }
  /**
   * Removes all app metadata objects from cache.
   */
  removeAppMetadata() {
    const allCacheKeys = this.getKeys();
    allCacheKeys.forEach((cacheKey) => {
      if (this.isAppMetadata(cacheKey)) {
        this.removeItem(cacheKey);
      }
    });
    return true;
  }
  /**
   * Retrieve AccountEntity from cache
   * @param account
   */
  readAccountFromCache(account) {
    const accountKey = AccountEntity.generateAccountCacheKey(account);
    return this.getAccount(accountKey, this.commonLogger);
  }
  /**
   * Retrieve IdTokenEntity from cache
   * @param account {AccountInfo}
   * @param tokenKeys {?TokenKeys}
   * @param targetRealm {?string}
   * @param performanceClient {?IPerformanceClient}
   * @param correlationId {?string}
   */
  getIdToken(account, tokenKeys, targetRealm, performanceClient, correlationId) {
    this.commonLogger.trace("CacheManager - getIdToken called");
    const idTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType: CredentialType.ID_TOKEN,
      clientId: this.clientId,
      realm: targetRealm
    };
    const idTokenMap = this.getIdTokensByFilter(idTokenFilter, tokenKeys);
    const numIdTokens = idTokenMap.size;
    if (numIdTokens < 1) {
      this.commonLogger.info("CacheManager:getIdToken - No token found");
      return null;
    } else if (numIdTokens > 1) {
      let tokensToBeRemoved = idTokenMap;
      if (!targetRealm) {
        const homeIdTokenMap = /* @__PURE__ */ new Map();
        idTokenMap.forEach((idToken, key) => {
          if (idToken.realm === account.tenantId) {
            homeIdTokenMap.set(key, idToken);
          }
        });
        const numHomeIdTokens = homeIdTokenMap.size;
        if (numHomeIdTokens < 1) {
          this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result");
          return idTokenMap.values().next().value;
        } else if (numHomeIdTokens === 1) {
          this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile");
          return homeIdTokenMap.values().next().value;
        } else {
          tokensToBeRemoved = homeIdTokenMap;
        }
      }
      this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them");
      tokensToBeRemoved.forEach((idToken, key) => {
        this.removeIdToken(key);
      });
      if (performanceClient && correlationId) {
        performanceClient.addFields({ multiMatchedID: idTokenMap.size }, correlationId);
      }
      return null;
    }
    this.commonLogger.info("CacheManager:getIdToken - Returning ID token");
    return idTokenMap.values().next().value;
  }
  /**
   * Gets all idTokens matching the given filter
   * @param filter
   * @returns
   */
  getIdTokensByFilter(filter, tokenKeys) {
    const idTokenKeys = tokenKeys && tokenKeys.idToken || this.getTokenKeys().idToken;
    const idTokens = /* @__PURE__ */ new Map();
    idTokenKeys.forEach((key) => {
      if (!this.idTokenKeyMatchesFilter(key, __spreadValues({
        clientId: this.clientId
      }, filter))) {
        return;
      }
      const idToken = this.getIdTokenCredential(key);
      if (idToken && this.credentialMatchesFilter(idToken, filter)) {
        idTokens.set(key, idToken);
      }
    });
    return idTokens;
  }
  /**
   * Validate the cache key against filter before retrieving and parsing cache value
   * @param key
   * @param filter
   * @returns
   */
  idTokenKeyMatchesFilter(inputKey, filter) {
    const key = inputKey.toLowerCase();
    if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
      return false;
    }
    return true;
  }
  /**
   * Removes idToken from the cache
   * @param key
   */
  removeIdToken(key) {
    this.removeItem(key);
  }
  /**
   * Removes refresh token from the cache
   * @param key
   */
  removeRefreshToken(key) {
    this.removeItem(key);
  }
  /**
   * Retrieve AccessTokenEntity from cache
   * @param account {AccountInfo}
   * @param request {BaseAuthRequest}
   * @param tokenKeys {?TokenKeys}
   * @param performanceClient {?IPerformanceClient}
   * @param correlationId {?string}
   */
  getAccessToken(account, request, tokenKeys, targetRealm, performanceClient, correlationId) {
    this.commonLogger.trace("CacheManager - getAccessToken called");
    const scopes = ScopeSet.createSearchScopes(request.scopes);
    const authScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
    const credentialType = authScheme && authScheme.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase() ? CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : CredentialType.ACCESS_TOKEN;
    const accessTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType,
      clientId: this.clientId,
      realm: targetRealm || account.tenantId,
      target: scopes,
      tokenType: authScheme,
      keyId: request.sshKid,
      requestedClaimsHash: request.requestedClaimsHash
    };
    const accessTokenKeys = tokenKeys && tokenKeys.accessToken || this.getTokenKeys().accessToken;
    const accessTokens = [];
    accessTokenKeys.forEach((key) => {
      if (this.accessTokenKeyMatchesFilter(key, accessTokenFilter, true)) {
        const accessToken = this.getAccessTokenCredential(key);
        if (accessToken && this.credentialMatchesFilter(accessToken, accessTokenFilter)) {
          accessTokens.push(accessToken);
        }
      }
    });
    const numAccessTokens = accessTokens.length;
    if (numAccessTokens < 1) {
      this.commonLogger.info("CacheManager:getAccessToken - No token found");
      return null;
    } else if (numAccessTokens > 1) {
      this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them");
      accessTokens.forEach((accessToken) => {
        void this.removeAccessToken(generateCredentialKey(accessToken));
      });
      if (performanceClient && correlationId) {
        performanceClient.addFields({ multiMatchedAT: accessTokens.length }, correlationId);
      }
      return null;
    }
    this.commonLogger.info("CacheManager:getAccessToken - Returning access token");
    return accessTokens[0];
  }
  /**
   * Validate the cache key against filter before retrieving and parsing cache value
   * @param key
   * @param filter
   * @param keyMustContainAllScopes
   * @returns
   */
  accessTokenKeyMatchesFilter(inputKey, filter, keyMustContainAllScopes) {
    const key = inputKey.toLowerCase();
    if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.realm && key.indexOf(filter.realm.toLowerCase()) === -1) {
      return false;
    }
    if (filter.requestedClaimsHash && key.indexOf(filter.requestedClaimsHash.toLowerCase()) === -1) {
      return false;
    }
    if (filter.target) {
      const scopes = filter.target.asArray();
      for (let i = 0; i < scopes.length; i++) {
        if (keyMustContainAllScopes && !key.includes(scopes[i].toLowerCase())) {
          return false;
        } else if (!keyMustContainAllScopes && key.includes(scopes[i].toLowerCase())) {
          return true;
        }
      }
    }
    return true;
  }
  /**
   * Gets all access tokens matching the filter
   * @param filter
   * @returns
   */
  getAccessTokensByFilter(filter) {
    const tokenKeys = this.getTokenKeys();
    const accessTokens = [];
    tokenKeys.accessToken.forEach((key) => {
      if (!this.accessTokenKeyMatchesFilter(key, filter, true)) {
        return;
      }
      const accessToken = this.getAccessTokenCredential(key);
      if (accessToken && this.credentialMatchesFilter(accessToken, filter)) {
        accessTokens.push(accessToken);
      }
    });
    return accessTokens;
  }
  /**
   * Helper to retrieve the appropriate refresh token from cache
   * @param account {AccountInfo}
   * @param familyRT {boolean}
   * @param tokenKeys {?TokenKeys}
   * @param performanceClient {?IPerformanceClient}
   * @param correlationId {?string}
   */
  getRefreshToken(account, familyRT, tokenKeys, performanceClient, correlationId) {
    this.commonLogger.trace("CacheManager - getRefreshToken called");
    const id = familyRT ? THE_FAMILY_ID : void 0;
    const refreshTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType: CredentialType.REFRESH_TOKEN,
      clientId: this.clientId,
      familyId: id
    };
    const refreshTokenKeys = tokenKeys && tokenKeys.refreshToken || this.getTokenKeys().refreshToken;
    const refreshTokens = [];
    refreshTokenKeys.forEach((key) => {
      if (this.refreshTokenKeyMatchesFilter(key, refreshTokenFilter)) {
        const refreshToken = this.getRefreshTokenCredential(key);
        if (refreshToken && this.credentialMatchesFilter(refreshToken, refreshTokenFilter)) {
          refreshTokens.push(refreshToken);
        }
      }
    });
    const numRefreshTokens = refreshTokens.length;
    if (numRefreshTokens < 1) {
      this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found.");
      return null;
    }
    if (numRefreshTokens > 1 && performanceClient && correlationId) {
      performanceClient.addFields({ multiMatchedRT: numRefreshTokens }, correlationId);
    }
    this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token");
    return refreshTokens[0];
  }
  /**
   * Validate the cache key against filter before retrieving and parsing cache value
   * @param key
   * @param filter
   */
  refreshTokenKeyMatchesFilter(inputKey, filter) {
    const key = inputKey.toLowerCase();
    if (filter.familyId && key.indexOf(filter.familyId.toLowerCase()) === -1) {
      return false;
    }
    if (!filter.familyId && filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
      return false;
    }
    return true;
  }
  /**
   * Retrieve AppMetadataEntity from cache
   */
  readAppMetadataFromCache(environment) {
    const appMetadataFilter = {
      environment,
      clientId: this.clientId
    };
    const appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter);
    const appMetadataEntries = Object.keys(appMetadata).map((key) => appMetadata[key]);
    const numAppMetadata = appMetadataEntries.length;
    if (numAppMetadata < 1) {
      return null;
    } else if (numAppMetadata > 1) {
      throw createClientAuthError(multipleMatchingAppMetadata);
    }
    return appMetadataEntries[0];
  }
  /**
   * Return the family_id value associated  with FOCI
   * @param environment
   * @param clientId
   */
  isAppMetadataFOCI(environment) {
    const appMetadata = this.readAppMetadataFromCache(environment);
    return !!(appMetadata && appMetadata.familyId === THE_FAMILY_ID);
  }
  /**
   * helper to match account ids
   * @param value
   * @param homeAccountId
   */
  matchHomeAccountId(entity, homeAccountId) {
    return !!(typeof entity.homeAccountId === "string" && homeAccountId === entity.homeAccountId);
  }
  /**
   * helper to match account ids
   * @param entity
   * @param localAccountId
   * @returns
   */
  matchLocalAccountIdFromTokenClaims(tokenClaims, localAccountId) {
    const idTokenLocalAccountId = tokenClaims.oid || tokenClaims.sub;
    return localAccountId === idTokenLocalAccountId;
  }
  matchLocalAccountIdFromTenantProfile(tenantProfile, localAccountId) {
    return tenantProfile.localAccountId === localAccountId;
  }
  /**
   * helper to match names
   * @param entity
   * @param name
   * @returns true if the downcased name properties are present and match in the filter and the entity
   */
  matchName(claims, name2) {
    return !!(name2.toLowerCase() === claims.name?.toLowerCase());
  }
  /**
   * helper to match usernames
   * @param entity
   * @param username
   * @returns
   */
  matchUsername(cachedUsername, filterUsername) {
    return !!(cachedUsername && typeof cachedUsername === "string" && filterUsername?.toLowerCase() === cachedUsername.toLowerCase());
  }
  /**
   * helper to match assertion
   * @param value
   * @param oboAssertion
   */
  matchUserAssertionHash(entity, userAssertionHash) {
    return !!(entity.userAssertionHash && userAssertionHash === entity.userAssertionHash);
  }
  /**
   * helper to match environment
   * @param value
   * @param environment
   */
  matchEnvironment(entity, environment) {
    if (this.staticAuthorityOptions) {
      const staticAliases = getAliasesFromStaticSources(this.staticAuthorityOptions, this.commonLogger);
      if (staticAliases.includes(environment) && staticAliases.includes(entity.environment)) {
        return true;
      }
    }
    const cloudMetadata = this.getAuthorityMetadataByAlias(environment);
    if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) {
      return true;
    }
    return false;
  }
  /**
   * helper to match credential type
   * @param entity
   * @param credentialType
   */
  matchCredentialType(entity, credentialType) {
    return entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase();
  }
  /**
   * helper to match client ids
   * @param entity
   * @param clientId
   */
  matchClientId(entity, clientId) {
    return !!(entity.clientId && clientId === entity.clientId);
  }
  /**
   * helper to match family ids
   * @param entity
   * @param familyId
   */
  matchFamilyId(entity, familyId) {
    return !!(entity.familyId && familyId === entity.familyId);
  }
  /**
   * helper to match realm
   * @param entity
   * @param realm
   */
  matchRealm(entity, realm) {
    return !!(entity.realm?.toLowerCase() === realm.toLowerCase());
  }
  /**
   * helper to match nativeAccountId
   * @param entity
   * @param nativeAccountId
   * @returns boolean indicating the match result
   */
  matchNativeAccountId(entity, nativeAccountId) {
    return !!(entity.nativeAccountId && nativeAccountId === entity.nativeAccountId);
  }
  /**
   * helper to match loginHint which can be either:
   * 1. login_hint ID token claim
   * 2. username in cached account object
   * 3. upn in ID token claims
   * @param entity
   * @param loginHint
   * @returns
   */
  matchLoginHintFromTokenClaims(tokenClaims, loginHint) {
    if (tokenClaims.login_hint === loginHint) {
      return true;
    }
    if (tokenClaims.preferred_username === loginHint) {
      return true;
    }
    if (tokenClaims.upn === loginHint) {
      return true;
    }
    return false;
  }
  /**
   * Helper to match sid
   * @param entity
   * @param sid
   * @returns true if the sid claim is present and matches the filter
   */
  matchSid(idTokenClaims, sid) {
    return idTokenClaims.sid === sid;
  }
  matchAuthorityType(entity, authorityType) {
    return !!(entity.authorityType && authorityType.toLowerCase() === entity.authorityType.toLowerCase());
  }
  /**
   * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
   * @param entity
   * @param target
   */
  matchTarget(entity, target) {
    const isNotAccessTokenCredential = entity.credentialType !== CredentialType.ACCESS_TOKEN && entity.credentialType !== CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
    if (isNotAccessTokenCredential || !entity.target) {
      return false;
    }
    const entityScopeSet = ScopeSet.fromString(entity.target);
    return entityScopeSet.containsScopeSet(target);
  }
  /**
   * Returns true if the credential's tokenType or Authentication Scheme matches the one in the request, false otherwise
   * @param entity
   * @param tokenType
   */
  matchTokenType(entity, tokenType) {
    return !!(entity.tokenType && entity.tokenType === tokenType);
  }
  /**
   * Returns true if the credential's keyId matches the one in the request, false otherwise
   * @param entity
   * @param tokenType
   */
  matchKeyId(entity, keyId) {
    return !!(entity.keyId && entity.keyId === keyId);
  }
  /**
   * returns if a given cache entity is of the type appmetadata
   * @param key
   */
  isAppMetadata(key) {
    return key.indexOf(APP_METADATA) !== -1;
  }
  /**
   * returns if a given cache entity is of the type authoritymetadata
   * @param key
   */
  isAuthorityMetadata(key) {
    return key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) !== -1;
  }
  /**
   * returns cache key used for cloud instance metadata
   */
  generateAuthorityMetadataCacheKey(authority) {
    return `${AUTHORITY_METADATA_CONSTANTS.CACHE_KEY}-${this.clientId}-${authority}`;
  }
  /**
   * Helper to convert serialized data to object
   * @param obj
   * @param json
   */
  static toObject(obj, json) {
    for (const propertyName in json) {
      obj[propertyName] = json[propertyName];
    }
    return obj;
  }
};
var DefaultStorageClass = class extends CacheManager {
  setAccount() {
    throw createClientAuthError(methodNotImplemented);
  }
  getAccount() {
    throw createClientAuthError(methodNotImplemented);
  }
  getCachedAccountEntity() {
    throw createClientAuthError(methodNotImplemented);
  }
  setIdTokenCredential() {
    throw createClientAuthError(methodNotImplemented);
  }
  getIdTokenCredential() {
    throw createClientAuthError(methodNotImplemented);
  }
  setAccessTokenCredential() {
    throw createClientAuthError(methodNotImplemented);
  }
  getAccessTokenCredential() {
    throw createClientAuthError(methodNotImplemented);
  }
  setRefreshTokenCredential() {
    throw createClientAuthError(methodNotImplemented);
  }
  getRefreshTokenCredential() {
    throw createClientAuthError(methodNotImplemented);
  }
  setAppMetadata() {
    throw createClientAuthError(methodNotImplemented);
  }
  getAppMetadata() {
    throw createClientAuthError(methodNotImplemented);
  }
  setServerTelemetry() {
    throw createClientAuthError(methodNotImplemented);
  }
  getServerTelemetry() {
    throw createClientAuthError(methodNotImplemented);
  }
  setAuthorityMetadata() {
    throw createClientAuthError(methodNotImplemented);
  }
  getAuthorityMetadata() {
    throw createClientAuthError(methodNotImplemented);
  }
  getAuthorityMetadataKeys() {
    throw createClientAuthError(methodNotImplemented);
  }
  setThrottlingCache() {
    throw createClientAuthError(methodNotImplemented);
  }
  getThrottlingCache() {
    throw createClientAuthError(methodNotImplemented);
  }
  removeItem() {
    throw createClientAuthError(methodNotImplemented);
  }
  getKeys() {
    throw createClientAuthError(methodNotImplemented);
  }
  getAccountKeys() {
    throw createClientAuthError(methodNotImplemented);
  }
  getTokenKeys() {
    throw createClientAuthError(methodNotImplemented);
  }
  clear() {
    return __async(this, null, function* () {
      throw createClientAuthError(methodNotImplemented);
    });
  }
  updateCredentialCacheKey() {
    throw createClientAuthError(methodNotImplemented);
  }
  removeOutdatedAccount() {
    throw createClientAuthError(methodNotImplemented);
  }
};

// node_modules/@azure/msal-common/dist/config/ClientConfiguration.mjs
var DEFAULT_SYSTEM_OPTIONS = {
  tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
  preventCorsPreflight: false
};
var DEFAULT_LOGGER_IMPLEMENTATION = {
  loggerCallback: () => {
  },
  piiLoggingEnabled: false,
  logLevel: LogLevel.Info,
  correlationId: Constants.EMPTY_STRING
};
var DEFAULT_CACHE_OPTIONS = {
  claimsBasedCachingEnabled: false
};
var DEFAULT_NETWORK_IMPLEMENTATION = {
  sendGetRequestAsync() {
    return __async(this, null, function* () {
      throw createClientAuthError(methodNotImplemented);
    });
  },
  sendPostRequestAsync() {
    return __async(this, null, function* () {
      throw createClientAuthError(methodNotImplemented);
    });
  }
};
var DEFAULT_LIBRARY_INFO = {
  sku: Constants.SKU,
  version,
  cpu: Constants.EMPTY_STRING,
  os: Constants.EMPTY_STRING
};
var DEFAULT_CLIENT_CREDENTIALS = {
  clientSecret: Constants.EMPTY_STRING,
  clientAssertion: void 0
};
var DEFAULT_AZURE_CLOUD_OPTIONS = {
  azureCloudInstance: AzureCloudInstance.None,
  tenant: `${Constants.DEFAULT_COMMON_TENANT}`
};
var DEFAULT_TELEMETRY_OPTIONS = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function buildClientConfiguration({ authOptions: userAuthOptions, systemOptions: userSystemOptions, loggerOptions: userLoggerOption, cacheOptions: userCacheOptions, storageInterface: storageImplementation, networkInterface: networkImplementation, cryptoInterface: cryptoImplementation, clientCredentials, libraryInfo, telemetry, serverTelemetryManager, persistencePlugin, serializableCache }) {
  const loggerOptions = __spreadValues(__spreadValues({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption);
  return {
    authOptions: buildAuthOptions(userAuthOptions),
    systemOptions: __spreadValues(__spreadValues({}, DEFAULT_SYSTEM_OPTIONS), userSystemOptions),
    loggerOptions,
    cacheOptions: __spreadValues(__spreadValues({}, DEFAULT_CACHE_OPTIONS), userCacheOptions),
    storageInterface: storageImplementation || new DefaultStorageClass(userAuthOptions.clientId, DEFAULT_CRYPTO_IMPLEMENTATION, new Logger(loggerOptions)),
    networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
    cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
    clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
    libraryInfo: __spreadValues(__spreadValues({}, DEFAULT_LIBRARY_INFO), libraryInfo),
    telemetry: __spreadValues(__spreadValues({}, DEFAULT_TELEMETRY_OPTIONS), telemetry),
    serverTelemetryManager: serverTelemetryManager || null,
    persistencePlugin: persistencePlugin || null,
    serializableCache: serializableCache || null
  };
}
function buildAuthOptions(authOptions) {
  return __spreadValues({
    clientCapabilities: [],
    azureCloudOptions: DEFAULT_AZURE_CLOUD_OPTIONS,
    skipAuthorityMetadataCache: false
  }, authOptions);
}
function isOidcProtocolMode(config) {
  return config.authOptions.authority.options.protocolMode === ProtocolMode.OIDC;
}

// node_modules/@azure/msal-common/dist/network/ThrottlingUtils.mjs
var ThrottlingUtils = class _ThrottlingUtils {
  /**
   * Prepares a RequestThumbprint to be stored as a key.
   * @param thumbprint
   */
  static generateThrottlingStorageKey(thumbprint) {
    return `${ThrottlingConstants.THROTTLING_PREFIX}.${JSON.stringify(thumbprint)}`;
  }
  /**
   * Performs necessary throttling checks before a network request.
   * @param cacheManager
   * @param thumbprint
   */
  static preProcess(cacheManager, thumbprint) {
    const key = _ThrottlingUtils.generateThrottlingStorageKey(thumbprint);
    const value = cacheManager.getThrottlingCache(key);
    if (value) {
      if (value.throttleTime < Date.now()) {
        cacheManager.removeItem(key);
        return;
      }
      throw new ServerError(value.errorCodes?.join(" ") || Constants.EMPTY_STRING, value.errorMessage, value.subError);
    }
  }
  /**
   * Performs necessary throttling checks after a network request.
   * @param cacheManager
   * @param thumbprint
   * @param response
   */
  static postProcess(cacheManager, thumbprint, response) {
    if (_ThrottlingUtils.checkResponseStatus(response) || _ThrottlingUtils.checkResponseForRetryAfter(response)) {
      const thumbprintValue = {
        throttleTime: _ThrottlingUtils.calculateThrottleTime(parseInt(response.headers[HeaderNames.RETRY_AFTER])),
        error: response.body.error,
        errorCodes: response.body.error_codes,
        errorMessage: response.body.error_description,
        subError: response.body.suberror
      };
      cacheManager.setThrottlingCache(_ThrottlingUtils.generateThrottlingStorageKey(thumbprint), thumbprintValue);
    }
  }
  /**
   * Checks a NetworkResponse object's status codes against 429 or 5xx
   * @param response
   */
  static checkResponseStatus(response) {
    return response.status === 429 || response.status >= 500 && response.status < 600;
  }
  /**
   * Checks a NetworkResponse object's RetryAfter header
   * @param response
   */
  static checkResponseForRetryAfter(response) {
    if (response.headers) {
      return response.headers.hasOwnProperty(HeaderNames.RETRY_AFTER) && (response.status < 200 || response.status >= 300);
    }
    return false;
  }
  /**
   * Calculates the Unix-time value for a throttle to expire given throttleTime in seconds.
   * @param throttleTime
   */
  static calculateThrottleTime(throttleTime) {
    const time = throttleTime <= 0 ? 0 : throttleTime;
    const currentSeconds = Date.now() / 1e3;
    return Math.floor(Math.min(currentSeconds + (time || ThrottlingConstants.DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + ThrottlingConstants.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
  }
  static removeThrottle(cacheManager, clientId, request, homeAccountIdentifier) {
    const thumbprint = {
      clientId,
      authority: request.authority,
      scopes: request.scopes,
      homeAccountIdentifier,
      claims: request.claims,
      authenticationScheme: request.authenticationScheme,
      resourceRequestMethod: request.resourceRequestMethod,
      resourceRequestUri: request.resourceRequestUri,
      shrClaims: request.shrClaims,
      sshKid: request.sshKid
    };
    const key = this.generateThrottlingStorageKey(thumbprint);
    cacheManager.removeItem(key);
  }
};

// node_modules/@azure/msal-common/dist/network/NetworkManager.mjs
var NetworkManager = class {
  constructor(networkClient, cacheManager) {
    this.networkClient = networkClient;
    this.cacheManager = cacheManager;
  }
  /**
   * Wraps sendPostRequestAsync with necessary preflight and postflight logic
   * @param thumbprint
   * @param tokenEndpoint
   * @param options
   */
  sendPostRequest(thumbprint, tokenEndpoint, options) {
    return __async(this, null, function* () {
      ThrottlingUtils.preProcess(this.cacheManager, thumbprint);
      let response;
      try {
        response = yield this.networkClient.sendPostRequestAsync(tokenEndpoint, options);
      } catch (e) {
        if (e instanceof AuthError) {
          throw e;
        } else {
          throw createClientAuthError(networkError);
        }
      }
      ThrottlingUtils.postProcess(this.cacheManager, thumbprint, response);
      return response;
    });
  }
};

// node_modules/@azure/msal-common/dist/account/CcsCredential.mjs
var CcsCredentialType = {
  HOME_ACCOUNT_ID: "home_account_id",
  UPN: "UPN"
};

// node_modules/@azure/msal-common/dist/constants/AADServerParamKeys.mjs
var AADServerParamKeys_exports = {};
__export(AADServerParamKeys_exports, {
  ACCESS_TOKEN: () => ACCESS_TOKEN,
  CCS_HEADER: () => CCS_HEADER,
  CLAIMS: () => CLAIMS,
  CLIENT_ASSERTION: () => CLIENT_ASSERTION,
  CLIENT_ASSERTION_TYPE: () => CLIENT_ASSERTION_TYPE,
  CLIENT_ID: () => CLIENT_ID,
  CLIENT_INFO: () => CLIENT_INFO2,
  CLIENT_REQUEST_ID: () => CLIENT_REQUEST_ID,
  CLIENT_SECRET: () => CLIENT_SECRET,
  CODE: () => CODE,
  CODE_CHALLENGE: () => CODE_CHALLENGE,
  CODE_CHALLENGE_METHOD: () => CODE_CHALLENGE_METHOD,
  CODE_VERIFIER: () => CODE_VERIFIER,
  DEVICE_CODE: () => DEVICE_CODE,
  DOMAIN_HINT: () => DOMAIN_HINT,
  ERROR: () => ERROR,
  ERROR_DESCRIPTION: () => ERROR_DESCRIPTION,
  EXPIRES_IN: () => EXPIRES_IN,
  FOCI: () => FOCI,
  GRANT_TYPE: () => GRANT_TYPE,
  ID_TOKEN: () => ID_TOKEN,
  ID_TOKEN_HINT: () => ID_TOKEN_HINT,
  LOGIN_HINT: () => LOGIN_HINT,
  LOGOUT_HINT: () => LOGOUT_HINT,
  NATIVE_BROKER: () => NATIVE_BROKER,
  NONCE: () => NONCE,
  OBO_ASSERTION: () => OBO_ASSERTION,
  ON_BEHALF_OF: () => ON_BEHALF_OF,
  POST_LOGOUT_URI: () => POST_LOGOUT_URI,
  PROMPT: () => PROMPT,
  REDIRECT_URI: () => REDIRECT_URI,
  REFRESH_TOKEN: () => REFRESH_TOKEN,
  REFRESH_TOKEN_EXPIRES_IN: () => REFRESH_TOKEN_EXPIRES_IN,
  REQUESTED_TOKEN_USE: () => REQUESTED_TOKEN_USE,
  REQ_CNF: () => REQ_CNF,
  RESPONSE_MODE: () => RESPONSE_MODE,
  RESPONSE_TYPE: () => RESPONSE_TYPE,
  RETURN_SPA_CODE: () => RETURN_SPA_CODE,
  SCOPE: () => SCOPE,
  SESSION_STATE: () => SESSION_STATE,
  SID: () => SID,
  STATE: () => STATE,
  TOKEN_TYPE: () => TOKEN_TYPE,
  X_APP_NAME: () => X_APP_NAME,
  X_APP_VER: () => X_APP_VER,
  X_CLIENT_CPU: () => X_CLIENT_CPU,
  X_CLIENT_CURR_TELEM: () => X_CLIENT_CURR_TELEM,
  X_CLIENT_LAST_TELEM: () => X_CLIENT_LAST_TELEM,
  X_CLIENT_OS: () => X_CLIENT_OS,
  X_CLIENT_SKU: () => X_CLIENT_SKU,
  X_CLIENT_VER: () => X_CLIENT_VER,
  X_MS_LIB_CAPABILITY: () => X_MS_LIB_CAPABILITY
});
var CLIENT_ID = "client_id";
var REDIRECT_URI = "redirect_uri";
var RESPONSE_TYPE = "response_type";
var RESPONSE_MODE = "response_mode";
var GRANT_TYPE = "grant_type";
var CLAIMS = "claims";
var SCOPE = "scope";
var ERROR = "error";
var ERROR_DESCRIPTION = "error_description";
var ACCESS_TOKEN = "access_token";
var ID_TOKEN = "id_token";
var REFRESH_TOKEN = "refresh_token";
var EXPIRES_IN = "expires_in";
var REFRESH_TOKEN_EXPIRES_IN = "refresh_token_expires_in";
var STATE = "state";
var NONCE = "nonce";
var PROMPT = "prompt";
var SESSION_STATE = "session_state";
var CLIENT_INFO2 = "client_info";
var CODE = "code";
var CODE_CHALLENGE = "code_challenge";
var CODE_CHALLENGE_METHOD = "code_challenge_method";
var CODE_VERIFIER = "code_verifier";
var CLIENT_REQUEST_ID = "client-request-id";
var X_CLIENT_SKU = "x-client-SKU";
var X_CLIENT_VER = "x-client-VER";
var X_CLIENT_OS = "x-client-OS";
var X_CLIENT_CPU = "x-client-CPU";
var X_CLIENT_CURR_TELEM = "x-client-current-telemetry";
var X_CLIENT_LAST_TELEM = "x-client-last-telemetry";
var X_MS_LIB_CAPABILITY = "x-ms-lib-capability";
var X_APP_NAME = "x-app-name";
var X_APP_VER = "x-app-ver";
var POST_LOGOUT_URI = "post_logout_redirect_uri";
var ID_TOKEN_HINT = "id_token_hint";
var DEVICE_CODE = "device_code";
var CLIENT_SECRET = "client_secret";
var CLIENT_ASSERTION = "client_assertion";
var CLIENT_ASSERTION_TYPE = "client_assertion_type";
var TOKEN_TYPE = "token_type";
var REQ_CNF = "req_cnf";
var OBO_ASSERTION = "assertion";
var REQUESTED_TOKEN_USE = "requested_token_use";
var ON_BEHALF_OF = "on_behalf_of";
var FOCI = "foci";
var CCS_HEADER = "X-AnchorMailbox";
var RETURN_SPA_CODE = "return_spa_code";
var NATIVE_BROKER = "nativebroker";
var LOGOUT_HINT = "logout_hint";
var SID = "sid";
var LOGIN_HINT = "login_hint";
var DOMAIN_HINT = "domain_hint";

// node_modules/@azure/msal-common/dist/request/RequestValidator.mjs
var RequestValidator = class {
  /**
   * Utility to check if the `redirectUri` in the request is a non-null value
   * @param redirectUri
   */
  static validateRedirectUri(redirectUri) {
    if (!redirectUri) {
      throw createClientConfigurationError(redirectUriEmpty);
    }
  }
  /**
   * Utility to validate prompt sent by the user in the request
   * @param prompt
   */
  static validatePrompt(prompt) {
    const promptValues = [];
    for (const value in PromptValue) {
      promptValues.push(PromptValue[value]);
    }
    if (promptValues.indexOf(prompt) < 0) {
      throw createClientConfigurationError(invalidPromptValue);
    }
  }
  static validateClaims(claims) {
    try {
      JSON.parse(claims);
    } catch (e) {
      throw createClientConfigurationError(invalidClaims);
    }
  }
  /**
   * Utility to validate code_challenge and code_challenge_method
   * @param codeChallenge
   * @param codeChallengeMethod
   */
  static validateCodeChallengeParams(codeChallenge, codeChallengeMethod) {
    if (!codeChallenge || !codeChallengeMethod) {
      throw createClientConfigurationError(pkceParamsMissing);
    } else {
      this.validateCodeChallengeMethod(codeChallengeMethod);
    }
  }
  /**
   * Utility to validate code_challenge_method
   * @param codeChallengeMethod
   */
  static validateCodeChallengeMethod(codeChallengeMethod) {
    if ([
      CodeChallengeMethodValues.PLAIN,
      CodeChallengeMethodValues.S256
    ].indexOf(codeChallengeMethod) < 0) {
      throw createClientConfigurationError(invalidCodeChallengeMethod);
    }
  }
  /**
   * Removes unnecessary, duplicate, and empty string query parameters from extraQueryParameters
   * @param request
   */
  static sanitizeEQParams(eQParams, queryParams) {
    if (!eQParams) {
      return {};
    }
    queryParams.forEach((_value, key) => {
      if (eQParams[key]) {
        delete eQParams[key];
      }
    });
    return Object.fromEntries(Object.entries(eQParams).filter((kv) => kv[1] !== ""));
  }
};

// node_modules/@azure/msal-common/dist/request/RequestParameterBuilder.mjs
var RequestParameterBuilder = class {
  constructor() {
    this.parameters = /* @__PURE__ */ new Map();
  }
  /**
   * add response_type = code
   */
  addResponseTypeCode() {
    this.parameters.set(RESPONSE_TYPE, encodeURIComponent(Constants.CODE_RESPONSE_TYPE));
  }
  /**
   * add response_type = token id_token
   */
  addResponseTypeForTokenAndIdToken() {
    this.parameters.set(RESPONSE_TYPE, encodeURIComponent(`${Constants.TOKEN_RESPONSE_TYPE} ${Constants.ID_TOKEN_RESPONSE_TYPE}`));
  }
  /**
   * add response_mode. defaults to query.
   * @param responseMode
   */
  addResponseMode(responseMode) {
    this.parameters.set(RESPONSE_MODE, encodeURIComponent(responseMode ? responseMode : ResponseMode.QUERY));
  }
  /**
   * Add flag to indicate STS should attempt to use WAM if available
   */
  addNativeBroker() {
    this.parameters.set(NATIVE_BROKER, encodeURIComponent("1"));
  }
  /**
   * add scopes. set addOidcScopes to false to prevent default scopes in non-user scenarios
   * @param scopeSet
   * @param addOidcScopes
   */
  addScopes(scopes, addOidcScopes = true, defaultScopes = OIDC_DEFAULT_SCOPES) {
    if (addOidcScopes && !defaultScopes.includes("openid") && !scopes.includes("openid")) {
      defaultScopes.push("openid");
    }
    const requestScopes = addOidcScopes ? [...scopes || [], ...defaultScopes] : scopes || [];
    const scopeSet = new ScopeSet(requestScopes);
    this.parameters.set(SCOPE, encodeURIComponent(scopeSet.printScopes()));
  }
  /**
   * add clientId
   * @param clientId
   */
  addClientId(clientId) {
    this.parameters.set(CLIENT_ID, encodeURIComponent(clientId));
  }
  /**
   * add redirect_uri
   * @param redirectUri
   */
  addRedirectUri(redirectUri) {
    RequestValidator.validateRedirectUri(redirectUri);
    this.parameters.set(REDIRECT_URI, encodeURIComponent(redirectUri));
  }
  /**
   * add post logout redirectUri
   * @param redirectUri
   */
  addPostLogoutRedirectUri(redirectUri) {
    RequestValidator.validateRedirectUri(redirectUri);
    this.parameters.set(POST_LOGOUT_URI, encodeURIComponent(redirectUri));
  }
  /**
   * add id_token_hint to logout request
   * @param idTokenHint
   */
  addIdTokenHint(idTokenHint) {
    this.parameters.set(ID_TOKEN_HINT, encodeURIComponent(idTokenHint));
  }
  /**
   * add domain_hint
   * @param domainHint
   */
  addDomainHint(domainHint) {
    this.parameters.set(DOMAIN_HINT, encodeURIComponent(domainHint));
  }
  /**
   * add login_hint
   * @param loginHint
   */
  addLoginHint(loginHint) {
    this.parameters.set(LOGIN_HINT, encodeURIComponent(loginHint));
  }
  /**
   * Adds the CCS (Cache Credential Service) query parameter for login_hint
   * @param loginHint
   */
  addCcsUpn(loginHint) {
    this.parameters.set(HeaderNames.CCS_HEADER, encodeURIComponent(`UPN:${loginHint}`));
  }
  /**
   * Adds the CCS (Cache Credential Service) query parameter for account object
   * @param loginHint
   */
  addCcsOid(clientInfo) {
    this.parameters.set(HeaderNames.CCS_HEADER, encodeURIComponent(`Oid:${clientInfo.uid}@${clientInfo.utid}`));
  }
  /**
   * add sid
   * @param sid
   */
  addSid(sid) {
    this.parameters.set(SID, encodeURIComponent(sid));
  }
  /**
   * add claims
   * @param claims
   */
  addClaims(claims, clientCapabilities) {
    const mergedClaims = this.addClientCapabilitiesToClaims(claims, clientCapabilities);
    RequestValidator.validateClaims(mergedClaims);
    this.parameters.set(CLAIMS, encodeURIComponent(mergedClaims));
  }
  /**
   * add correlationId
   * @param correlationId
   */
  addCorrelationId(correlationId) {
    this.parameters.set(CLIENT_REQUEST_ID, encodeURIComponent(correlationId));
  }
  /**
   * add library info query params
   * @param libraryInfo
   */
  addLibraryInfo(libraryInfo) {
    this.parameters.set(X_CLIENT_SKU, libraryInfo.sku);
    this.parameters.set(X_CLIENT_VER, libraryInfo.version);
    if (libraryInfo.os) {
      this.parameters.set(X_CLIENT_OS, libraryInfo.os);
    }
    if (libraryInfo.cpu) {
      this.parameters.set(X_CLIENT_CPU, libraryInfo.cpu);
    }
  }
  /**
   * Add client telemetry parameters
   * @param appTelemetry
   */
  addApplicationTelemetry(appTelemetry) {
    if (appTelemetry?.appName) {
      this.parameters.set(X_APP_NAME, appTelemetry.appName);
    }
    if (appTelemetry?.appVersion) {
      this.parameters.set(X_APP_VER, appTelemetry.appVersion);
    }
  }
  /**
   * add prompt
   * @param prompt
   */
  addPrompt(prompt) {
    RequestValidator.validatePrompt(prompt);
    this.parameters.set(`${PROMPT}`, encodeURIComponent(prompt));
  }
  /**
   * add state
   * @param state
   */
  addState(state) {
    if (state) {
      this.parameters.set(STATE, encodeURIComponent(state));
    }
  }
  /**
   * add nonce
   * @param nonce
   */
  addNonce(nonce) {
    this.parameters.set(NONCE, encodeURIComponent(nonce));
  }
  /**
   * add code_challenge and code_challenge_method
   * - throw if either of them are not passed
   * @param codeChallenge
   * @param codeChallengeMethod
   */
  addCodeChallengeParams(codeChallenge, codeChallengeMethod) {
    RequestValidator.validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
    if (codeChallenge && codeChallengeMethod) {
      this.parameters.set(CODE_CHALLENGE, encodeURIComponent(codeChallenge));
      this.parameters.set(CODE_CHALLENGE_METHOD, encodeURIComponent(codeChallengeMethod));
    } else {
      throw createClientConfigurationError(pkceParamsMissing);
    }
  }
  /**
   * add the `authorization_code` passed by the user to exchange for a token
   * @param code
   */
  addAuthorizationCode(code) {
    this.parameters.set(CODE, encodeURIComponent(code));
  }
  /**
   * add the `authorization_code` passed by the user to exchange for a token
   * @param code
   */
  addDeviceCode(code) {
    this.parameters.set(DEVICE_CODE, encodeURIComponent(code));
  }
  /**
   * add the `refreshToken` passed by the user
   * @param refreshToken
   */
  addRefreshToken(refreshToken) {
    this.parameters.set(REFRESH_TOKEN, encodeURIComponent(refreshToken));
  }
  /**
   * add the `code_verifier` passed by the user to exchange for a token
   * @param codeVerifier
   */
  addCodeVerifier(codeVerifier) {
    this.parameters.set(CODE_VERIFIER, encodeURIComponent(codeVerifier));
  }
  /**
   * add client_secret
   * @param clientSecret
   */
  addClientSecret(clientSecret) {
    this.parameters.set(CLIENT_SECRET, encodeURIComponent(clientSecret));
  }
  /**
   * add clientAssertion for confidential client flows
   * @param clientAssertion
   */
  addClientAssertion(clientAssertion) {
    if (clientAssertion) {
      this.parameters.set(CLIENT_ASSERTION, encodeURIComponent(clientAssertion));
    }
  }
  /**
   * add clientAssertionType for confidential client flows
   * @param clientAssertionType
   */
  addClientAssertionType(clientAssertionType) {
    if (clientAssertionType) {
      this.parameters.set(CLIENT_ASSERTION_TYPE, encodeURIComponent(clientAssertionType));
    }
  }
  /**
   * add OBO assertion for confidential client flows
   * @param clientAssertion
   */
  addOboAssertion(oboAssertion) {
    this.parameters.set(OBO_ASSERTION, encodeURIComponent(oboAssertion));
  }
  /**
   * add grant type
   * @param grantType
   */
  addRequestTokenUse(tokenUse) {
    this.parameters.set(REQUESTED_TOKEN_USE, encodeURIComponent(tokenUse));
  }
  /**
   * add grant type
   * @param grantType
   */
  addGrantType(grantType) {
    this.parameters.set(GRANT_TYPE, encodeURIComponent(grantType));
  }
  /**
   * add client info
   *
   */
  addClientInfo() {
    this.parameters.set(CLIENT_INFO, "1");
  }
  /**
   * add extraQueryParams
   * @param eQParams
   */
  addExtraQueryParameters(eQParams) {
    const sanitizedEQParams = RequestValidator.sanitizeEQParams(eQParams, this.parameters);
    Object.keys(sanitizedEQParams).forEach((key) => {
      this.parameters.set(key, eQParams[key]);
    });
  }
  addClientCapabilitiesToClaims(claims, clientCapabilities) {
    let mergedClaims;
    if (!claims) {
      mergedClaims = {};
    } else {
      try {
        mergedClaims = JSON.parse(claims);
      } catch (e) {
        throw createClientConfigurationError(invalidClaims);
      }
    }
    if (clientCapabilities && clientCapabilities.length > 0) {
      if (!mergedClaims.hasOwnProperty(ClaimsRequestKeys.ACCESS_TOKEN)) {
        mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN] = {};
      }
      mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN][ClaimsRequestKeys.XMS_CC] = {
        values: clientCapabilities
      };
    }
    return JSON.stringify(mergedClaims);
  }
  /**
   * adds `username` for Password Grant flow
   * @param username
   */
  addUsername(username) {
    this.parameters.set(PasswordGrantConstants.username, encodeURIComponent(username));
  }
  /**
   * adds `password` for Password Grant flow
   * @param password
   */
  addPassword(password) {
    this.parameters.set(PasswordGrantConstants.password, encodeURIComponent(password));
  }
  /**
   * add pop_jwk to query params
   * @param cnfString
   */
  addPopToken(cnfString) {
    if (cnfString) {
      this.parameters.set(TOKEN_TYPE, AuthenticationScheme.POP);
      this.parameters.set(REQ_CNF, encodeURIComponent(cnfString));
    }
  }
  /**
   * add SSH JWK and key ID to query params
   */
  addSshJwk(sshJwkString) {
    if (sshJwkString) {
      this.parameters.set(TOKEN_TYPE, AuthenticationScheme.SSH);
      this.parameters.set(REQ_CNF, encodeURIComponent(sshJwkString));
    }
  }
  /**
   * add server telemetry fields
   * @param serverTelemetryManager
   */
  addServerTelemetry(serverTelemetryManager) {
    this.parameters.set(X_CLIENT_CURR_TELEM, serverTelemetryManager.generateCurrentRequestHeaderValue());
    this.parameters.set(X_CLIENT_LAST_TELEM, serverTelemetryManager.generateLastRequestHeaderValue());
  }
  /**
   * Adds parameter that indicates to the server that throttling is supported
   */
  addThrottling() {
    this.parameters.set(X_MS_LIB_CAPABILITY, ThrottlingConstants.X_MS_LIB_CAPABILITY_VALUE);
  }
  /**
   * Adds logout_hint parameter for "silent" logout which prevent server account picker
   */
  addLogoutHint(logoutHint) {
    this.parameters.set(LOGOUT_HINT, encodeURIComponent(logoutHint));
  }
  /**
   * Utility to create a URL from the params map
   */
  createQueryString() {
    const queryParameterArray = new Array();
    this.parameters.forEach((value, key) => {
      queryParameterArray.push(`${key}=${value}`);
    });
    return queryParameterArray.join("&");
  }
};

// node_modules/@azure/msal-common/dist/authority/AuthorityFactory.mjs
var AuthorityFactory_exports = {};
__export(AuthorityFactory_exports, {
  createDiscoveredInstance: () => createDiscoveredInstance
});
function createDiscoveredInstance(authorityUri, networkClient, cacheManager, authorityOptions, logger, correlationId, performanceClient) {
  return __async(this, null, function* () {
    performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityFactoryCreateDiscoveredInstance, correlationId);
    const authorityUriFinal = Authority.transformCIAMAuthority(formatAuthorityUri(authorityUri));
    const acquireTokenAuthority = new Authority(authorityUriFinal, networkClient, cacheManager, authorityOptions, logger, correlationId, performanceClient);
    try {
      yield invokeAsync(acquireTokenAuthority.resolveEndpointsAsync.bind(acquireTokenAuthority), PerformanceEvents.AuthorityResolveEndpointsAsync, logger, performanceClient, correlationId)();
      return acquireTokenAuthority;
    } catch (e) {
      throw createClientAuthError(endpointResolutionError);
    }
  });
}

// node_modules/@azure/msal-common/dist/client/BaseClient.mjs
var BaseClient = class {
  constructor(configuration, performanceClient) {
    this.config = buildClientConfiguration(configuration);
    this.logger = new Logger(this.config.loggerOptions, name, version);
    this.cryptoUtils = this.config.cryptoInterface;
    this.cacheManager = this.config.storageInterface;
    this.networkClient = this.config.networkInterface;
    this.networkManager = new NetworkManager(this.networkClient, this.cacheManager);
    this.serverTelemetryManager = this.config.serverTelemetryManager;
    this.authority = this.config.authOptions.authority;
    this.performanceClient = performanceClient;
  }
  /**
   * Creates default headers for requests to token endpoint
   */
  createTokenRequestHeaders(ccsCred) {
    const headers = {};
    headers[HeaderNames.CONTENT_TYPE] = Constants.URL_FORM_CONTENT_TYPE;
    if (!this.config.systemOptions.preventCorsPreflight && ccsCred) {
      switch (ccsCred.type) {
        case CcsCredentialType.HOME_ACCOUNT_ID:
          try {
            const clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
            headers[HeaderNames.CCS_HEADER] = `Oid:${clientInfo.uid}@${clientInfo.utid}`;
          } catch (e) {
            this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
          }
          break;
        case CcsCredentialType.UPN:
          headers[HeaderNames.CCS_HEADER] = `UPN: ${ccsCred.credential}`;
          break;
      }
    }
    return headers;
  }
  /**
   * Http post to token endpoint
   * @param tokenEndpoint
   * @param queryString
   * @param headers
   * @param thumbprint
   */
  executePostToTokenEndpoint(tokenEndpoint, queryString, headers, thumbprint, correlationId, queuedEvent) {
    return __async(this, null, function* () {
      if (queuedEvent) {
        this.performanceClient?.addQueueMeasurement(queuedEvent, correlationId);
      }
      const response = yield this.networkManager.sendPostRequest(thumbprint, tokenEndpoint, { body: queryString, headers });
      this.performanceClient?.addFields({
        refreshTokenSize: response.body.refresh_token?.length || 0,
        httpVerToken: response.headers?.[HeaderNames.X_MS_HTTP_VERSION] || ""
      }, correlationId);
      if (this.config.serverTelemetryManager && response.status < 500 && response.status !== 429) {
        this.config.serverTelemetryManager.clearTelemetryCache();
      }
      return response;
    });
  }
  /**
   * Updates the authority object of the client. Endpoint discovery must be completed.
   * @param updatedAuthority
   */
  updateAuthority(cloudInstanceHostname, correlationId) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.UpdateTokenEndpointAuthority, correlationId);
      const cloudInstanceAuthorityUri = `https://${cloudInstanceHostname}/${this.authority.tenant}/`;
      const cloudInstanceAuthority = yield createDiscoveredInstance(cloudInstanceAuthorityUri, this.networkClient, this.cacheManager, this.authority.options, this.logger, correlationId, this.performanceClient);
      this.authority = cloudInstanceAuthority;
    });
  }
  /**
   * Creates query string for the /token request
   * @param request
   */
  createTokenQueryParameters(request) {
    const parameterBuilder = new RequestParameterBuilder();
    if (request.tokenQueryParameters) {
      parameterBuilder.addExtraQueryParameters(request.tokenQueryParameters);
    }
    return parameterBuilder.createQueryString();
  }
};

// node_modules/@azure/msal-common/dist/cache/entities/CacheRecord.mjs
var CacheRecord = class {
  constructor(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity, appMetadataEntity) {
    this.account = accountEntity || null;
    this.idToken = idTokenEntity || null;
    this.accessToken = accessTokenEntity || null;
    this.refreshToken = refreshTokenEntity || null;
    this.appMetadata = appMetadataEntity || null;
  }
};

// node_modules/@azure/msal-common/dist/utils/ProtocolUtils.mjs
var ProtocolUtils = class _ProtocolUtils {
  /**
   * Appends user state with random guid, or returns random guid.
   * @param userState
   * @param randomGuid
   */
  static setRequestState(cryptoObj, userState, meta) {
    const libraryState = _ProtocolUtils.generateLibraryState(cryptoObj, meta);
    return userState ? `${libraryState}${Constants.RESOURCE_DELIM}${userState}` : libraryState;
  }
  /**
   * Generates the state value used by the common library.
   * @param randomGuid
   * @param cryptoObj
   */
  static generateLibraryState(cryptoObj, meta) {
    if (!cryptoObj) {
      throw createClientAuthError(noCryptoObject);
    }
    const stateObj = {
      id: cryptoObj.createNewGuid()
    };
    if (meta) {
      stateObj.meta = meta;
    }
    const stateString = JSON.stringify(stateObj);
    return cryptoObj.base64Encode(stateString);
  }
  /**
   * Parses the state into the RequestStateObject, which contains the LibraryState info and the state passed by the user.
   * @param state
   * @param cryptoObj
   */
  static parseRequestState(cryptoObj, state) {
    if (!cryptoObj) {
      throw createClientAuthError(noCryptoObject);
    }
    if (!state) {
      throw createClientAuthError(invalidState);
    }
    try {
      const splitState = state.split(Constants.RESOURCE_DELIM);
      const libraryState = splitState[0];
      const userState = splitState.length > 1 ? splitState.slice(1).join(Constants.RESOURCE_DELIM) : Constants.EMPTY_STRING;
      const libraryStateString = cryptoObj.base64Decode(libraryState);
      const libraryStateObj = JSON.parse(libraryStateString);
      return {
        userRequestState: userState || Constants.EMPTY_STRING,
        libraryState: libraryStateObj
      };
    } catch (e) {
      throw createClientAuthError(invalidState);
    }
  }
};

// node_modules/@azure/msal-common/dist/crypto/PopTokenGenerator.mjs
var KeyLocation = {
  SW: "sw",
  UHW: "uhw"
};
var PopTokenGenerator = class {
  constructor(cryptoUtils, performanceClient) {
    this.cryptoUtils = cryptoUtils;
    this.performanceClient = performanceClient;
  }
  /**
   * Generates the req_cnf validated at the RP in the POP protocol for SHR parameters
   * and returns an object containing the keyid, the full req_cnf string and the req_cnf string hash
   * @param request
   * @returns
   */
  generateCnf(request, logger) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.PopTokenGenerateCnf, request.correlationId);
      const reqCnf = yield invokeAsync(this.generateKid.bind(this), PerformanceEvents.PopTokenGenerateCnf, logger, this.performanceClient, request.correlationId)(request);
      const reqCnfString = this.cryptoUtils.base64Encode(JSON.stringify(reqCnf));
      return {
        kid: reqCnf.kid,
        reqCnfString,
        reqCnfHash: yield this.cryptoUtils.hashString(reqCnfString)
      };
    });
  }
  /**
   * Generates key_id for a SHR token request
   * @param request
   * @returns
   */
  generateKid(request) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.PopTokenGenerateKid, request.correlationId);
      const kidThumbprint = yield this.cryptoUtils.getPublicKeyThumbprint(request);
      return {
        kid: kidThumbprint,
        xms_ksl: KeyLocation.SW
      };
    });
  }
  /**
   * Signs the POP access_token with the local generated key-pair
   * @param accessToken
   * @param request
   * @returns
   */
  signPopToken(accessToken, keyId, request) {
    return __async(this, null, function* () {
      return this.signPayload(accessToken, keyId, request);
    });
  }
  /**
   * Utility function to generate the signed JWT for an access_token
   * @param payload
   * @param kid
   * @param request
   * @param claims
   * @returns
   */
  signPayload(payload, keyId, request, claims) {
    return __async(this, null, function* () {
      const { resourceRequestMethod, resourceRequestUri, shrClaims, shrNonce, shrOptions } = request;
      const resourceUrlString = resourceRequestUri ? new UrlString(resourceRequestUri) : void 0;
      const resourceUrlComponents = resourceUrlString?.getUrlComponents();
      return this.cryptoUtils.signJwt(__spreadValues({
        at: payload,
        ts: nowSeconds(),
        m: resourceRequestMethod?.toUpperCase(),
        u: resourceUrlComponents?.HostNameAndPort,
        nonce: shrNonce || this.cryptoUtils.createNewGuid(),
        p: resourceUrlComponents?.AbsolutePath,
        q: resourceUrlComponents?.QueryString ? [[], resourceUrlComponents.QueryString] : void 0,
        client_claims: shrClaims || void 0
      }, claims), keyId, shrOptions, request.correlationId);
    });
  }
};

// node_modules/@azure/msal-common/dist/cache/persistence/TokenCacheContext.mjs
var TokenCacheContext = class {
  constructor(tokenCache, hasChanged) {
    this.cache = tokenCache;
    this.hasChanged = hasChanged;
  }
  /**
   * boolean which indicates the changes in cache
   */
  get cacheHasChanged() {
    return this.hasChanged;
  }
  /**
   * function to retrieve the token cache
   */
  get tokenCache() {
    return this.cache;
  }
};

// node_modules/@azure/msal-common/dist/response/ResponseHandler.mjs
function parseServerErrorNo(serverResponse) {
  const errorCodePrefix = "code=";
  const errorCodePrefixIndex = serverResponse.error_uri?.lastIndexOf(errorCodePrefix);
  return errorCodePrefixIndex && errorCodePrefixIndex >= 0 ? serverResponse.error_uri?.substring(errorCodePrefixIndex + errorCodePrefix.length) : void 0;
}
var ResponseHandler = class _ResponseHandler {
  constructor(clientId, cacheStorage, cryptoObj, logger, serializableCache, persistencePlugin, performanceClient) {
    this.clientId = clientId;
    this.cacheStorage = cacheStorage;
    this.cryptoObj = cryptoObj;
    this.logger = logger;
    this.serializableCache = serializableCache;
    this.persistencePlugin = persistencePlugin;
    this.performanceClient = performanceClient;
  }
  /**
   * Function which validates server authorization code response.
   * @param serverResponseHash
   * @param requestState
   * @param cryptoObj
   */
  validateServerAuthorizationCodeResponse(serverResponse, requestState) {
    if (!serverResponse.state || !requestState) {
      throw serverResponse.state ? createClientAuthError(stateNotFound, "Cached State") : createClientAuthError(stateNotFound, "Server State");
    }
    let decodedServerResponseState;
    let decodedRequestState;
    try {
      decodedServerResponseState = decodeURIComponent(serverResponse.state);
    } catch (e) {
      throw createClientAuthError(invalidState, serverResponse.state);
    }
    try {
      decodedRequestState = decodeURIComponent(requestState);
    } catch (e) {
      throw createClientAuthError(invalidState, serverResponse.state);
    }
    if (decodedServerResponseState !== decodedRequestState) {
      throw createClientAuthError(stateMismatch);
    }
    if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
      const serverErrorNo = parseServerErrorNo(serverResponse);
      if (isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
        throw new InteractionRequiredAuthError(serverResponse.error || "", serverResponse.error_description, serverResponse.suberror, serverResponse.timestamp || "", serverResponse.trace_id || "", serverResponse.correlation_id || "", serverResponse.claims || "", serverErrorNo);
      }
      throw new ServerError(serverResponse.error || "", serverResponse.error_description, serverResponse.suberror, serverErrorNo);
    }
  }
  /**
   * Function which validates server authorization token response.
   * @param serverResponse
   * @param refreshAccessToken
   */
  validateTokenResponse(serverResponse, refreshAccessToken) {
    if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
      const errString = `${serverResponse.error_codes} - [${serverResponse.timestamp}]: ${serverResponse.error_description} - Correlation ID: ${serverResponse.correlation_id} - Trace ID: ${serverResponse.trace_id}`;
      const serverErrorNo = serverResponse.error_codes?.length ? serverResponse.error_codes[0] : void 0;
      const serverError = new ServerError(serverResponse.error, errString, serverResponse.suberror, serverErrorNo);
      if (refreshAccessToken && serverResponse.status && serverResponse.status >= HttpStatus.SERVER_ERROR_RANGE_START && serverResponse.status <= HttpStatus.SERVER_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${serverError}`);
        return;
      } else if (refreshAccessToken && serverResponse.status && serverResponse.status >= HttpStatus.CLIENT_ERROR_RANGE_START && serverResponse.status <= HttpStatus.CLIENT_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${serverError}`);
        return;
      }
      if (isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
        throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror, serverResponse.timestamp || Constants.EMPTY_STRING, serverResponse.trace_id || Constants.EMPTY_STRING, serverResponse.correlation_id || Constants.EMPTY_STRING, serverResponse.claims || Constants.EMPTY_STRING, serverErrorNo);
      }
      throw serverError;
    }
  }
  /**
   * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
   * @param serverTokenResponse
   * @param authority
   */
  handleServerTokenResponse(serverTokenResponse, authority, reqTimestamp, request, authCodePayload, userAssertionHash, handlingRefreshTokenResponse, forceCacheRefreshTokenResponse, serverRequestId) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.HandleServerTokenResponse, serverTokenResponse.correlation_id);
      let idTokenClaims;
      if (serverTokenResponse.id_token) {
        idTokenClaims = extractTokenClaims(serverTokenResponse.id_token || Constants.EMPTY_STRING, this.cryptoObj.base64Decode);
        if (authCodePayload && authCodePayload.nonce) {
          if (idTokenClaims.nonce !== authCodePayload.nonce) {
            throw createClientAuthError(nonceMismatch);
          }
        }
        if (request.maxAge || request.maxAge === 0) {
          const authTime = idTokenClaims.auth_time;
          if (!authTime) {
            throw createClientAuthError(authTimeNotFound);
          }
          checkMaxAge(authTime, request.maxAge);
        }
      }
      this.homeAccountIdentifier = AccountEntity.generateHomeAccountId(serverTokenResponse.client_info || Constants.EMPTY_STRING, authority.authorityType, this.logger, this.cryptoObj, idTokenClaims);
      let requestStateObj;
      if (!!authCodePayload && !!authCodePayload.state) {
        requestStateObj = ProtocolUtils.parseRequestState(this.cryptoObj, authCodePayload.state);
      }
      serverTokenResponse.key_id = serverTokenResponse.key_id || request.sshKid || void 0;
      const cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenClaims, userAssertionHash, authCodePayload);
      let cacheContext;
      try {
        if (this.persistencePlugin && this.serializableCache) {
          this.logger.verbose("Persistence enabled, calling beforeCacheAccess");
          cacheContext = new TokenCacheContext(this.serializableCache, true);
          yield this.persistencePlugin.beforeCacheAccess(cacheContext);
        }
        if (handlingRefreshTokenResponse && !forceCacheRefreshTokenResponse && cacheRecord.account) {
          const key = cacheRecord.account.generateAccountKey();
          const account = this.cacheStorage.getAccount(key, this.logger);
          if (!account) {
            this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache");
            return yield _ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenClaims, requestStateObj, void 0, serverRequestId);
          }
        }
        yield this.cacheStorage.saveCacheRecord(cacheRecord, request.storeInCache, request.correlationId);
      } finally {
        if (this.persistencePlugin && this.serializableCache && cacheContext) {
          this.logger.verbose("Persistence enabled, calling afterCacheAccess");
          yield this.persistencePlugin.afterCacheAccess(cacheContext);
        }
      }
      return _ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenClaims, requestStateObj, serverTokenResponse, serverRequestId);
    });
  }
  /**
   * Generates CacheRecord
   * @param serverTokenResponse
   * @param idTokenObj
   * @param authority
   */
  generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenClaims, userAssertionHash, authCodePayload) {
    const env = authority.getPreferredCache();
    if (!env) {
      throw createClientAuthError(invalidCacheEnvironment);
    }
    const claimsTenantId = getTenantIdFromIdTokenClaims(idTokenClaims);
    let cachedIdToken;
    let cachedAccount;
    if (serverTokenResponse.id_token && !!idTokenClaims) {
      cachedIdToken = createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token, this.clientId, claimsTenantId || "");
      cachedAccount = buildAccountToCache(
        this.cacheStorage,
        authority,
        this.homeAccountIdentifier,
        idTokenClaims,
        this.cryptoObj.base64Decode,
        serverTokenResponse.client_info,
        env,
        claimsTenantId,
        authCodePayload,
        void 0,
        // nativeAccountId
        this.logger
      );
    }
    let cachedAccessToken = null;
    if (serverTokenResponse.access_token) {
      const responseScopes = serverTokenResponse.scope ? ScopeSet.fromString(serverTokenResponse.scope) : new ScopeSet(request.scopes || []);
      const expiresIn = (typeof serverTokenResponse.expires_in === "string" ? parseInt(serverTokenResponse.expires_in, 10) : serverTokenResponse.expires_in) || 0;
      const extExpiresIn = (typeof serverTokenResponse.ext_expires_in === "string" ? parseInt(serverTokenResponse.ext_expires_in, 10) : serverTokenResponse.ext_expires_in) || 0;
      const refreshIn = (typeof serverTokenResponse.refresh_in === "string" ? parseInt(serverTokenResponse.refresh_in, 10) : serverTokenResponse.refresh_in) || void 0;
      const tokenExpirationSeconds = reqTimestamp + expiresIn;
      const extendedTokenExpirationSeconds = tokenExpirationSeconds + extExpiresIn;
      const refreshOnSeconds = refreshIn && refreshIn > 0 ? reqTimestamp + refreshIn : void 0;
      cachedAccessToken = createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token, this.clientId, claimsTenantId || authority.tenant || "", responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, this.cryptoObj.base64Decode, refreshOnSeconds, serverTokenResponse.token_type, userAssertionHash, serverTokenResponse.key_id, request.claims, request.requestedClaimsHash);
    }
    let cachedRefreshToken = null;
    if (serverTokenResponse.refresh_token) {
      let rtExpiresOn;
      if (serverTokenResponse.refresh_token_expires_in) {
        const rtExpiresIn = typeof serverTokenResponse.refresh_token_expires_in === "string" ? parseInt(serverTokenResponse.refresh_token_expires_in, 10) : serverTokenResponse.refresh_token_expires_in;
        rtExpiresOn = reqTimestamp + rtExpiresIn;
      }
      cachedRefreshToken = createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token, this.clientId, serverTokenResponse.foci, userAssertionHash, rtExpiresOn);
    }
    let cachedAppMetadata = null;
    if (serverTokenResponse.foci) {
      cachedAppMetadata = {
        clientId: this.clientId,
        environment: env,
        familyId: serverTokenResponse.foci
      };
    }
    return new CacheRecord(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken, cachedAppMetadata);
  }
  /**
   * Creates an @AuthenticationResult from @CacheRecord , @IdToken , and a boolean that states whether or not the result is from cache.
   *
   * Optionally takes a state string that is set as-is in the response.
   *
   * @param cacheRecord
   * @param idTokenObj
   * @param fromTokenCache
   * @param stateString
   */
  static generateAuthenticationResult(cryptoObj, authority, cacheRecord, fromTokenCache, request, idTokenClaims, requestState, serverTokenResponse, requestId) {
    return __async(this, null, function* () {
      let accessToken = Constants.EMPTY_STRING;
      let responseScopes = [];
      let expiresOn = null;
      let extExpiresOn;
      let refreshOn;
      let familyId = Constants.EMPTY_STRING;
      if (cacheRecord.accessToken) {
        if (cacheRecord.accessToken.tokenType === AuthenticationScheme.POP) {
          const popTokenGenerator = new PopTokenGenerator(cryptoObj);
          const { secret, keyId } = cacheRecord.accessToken;
          if (!keyId) {
            throw createClientAuthError(keyIdMissing);
          }
          accessToken = yield popTokenGenerator.signPopToken(secret, keyId, request);
        } else {
          accessToken = cacheRecord.accessToken.secret;
        }
        responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
        expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1e3);
        extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1e3);
        if (cacheRecord.accessToken.refreshOn) {
          refreshOn = new Date(Number(cacheRecord.accessToken.refreshOn) * 1e3);
        }
      }
      if (cacheRecord.appMetadata) {
        familyId = cacheRecord.appMetadata.familyId === THE_FAMILY_ID ? THE_FAMILY_ID : "";
      }
      const uid = idTokenClaims?.oid || idTokenClaims?.sub || "";
      const tid = idTokenClaims?.tid || "";
      if (serverTokenResponse?.spa_accountid && !!cacheRecord.account) {
        cacheRecord.account.nativeAccountId = serverTokenResponse?.spa_accountid;
      }
      const accountInfo = cacheRecord.account ? updateAccountTenantProfileData(
        cacheRecord.account.getAccountInfo(),
        void 0,
        // tenantProfile optional
        idTokenClaims,
        cacheRecord.idToken?.secret
      ) : null;
      return {
        authority: authority.canonicalAuthority,
        uniqueId: uid,
        tenantId: tid,
        scopes: responseScopes,
        account: accountInfo,
        idToken: cacheRecord?.idToken?.secret || "",
        idTokenClaims: idTokenClaims || {},
        accessToken,
        fromCache: fromTokenCache,
        expiresOn,
        extExpiresOn,
        refreshOn,
        correlationId: request.correlationId,
        requestId: requestId || Constants.EMPTY_STRING,
        familyId,
        tokenType: cacheRecord.accessToken?.tokenType || Constants.EMPTY_STRING,
        state: requestState ? requestState.userRequestState : Constants.EMPTY_STRING,
        cloudGraphHostName: cacheRecord.account?.cloudGraphHostName || Constants.EMPTY_STRING,
        msGraphHost: cacheRecord.account?.msGraphHost || Constants.EMPTY_STRING,
        code: serverTokenResponse?.spa_code,
        fromNativeBroker: false
      };
    });
  }
};
function buildAccountToCache(cacheStorage, authority, homeAccountId, idTokenClaims, base64Decode2, clientInfo, environment, claimsTenantId, authCodePayload, nativeAccountId, logger) {
  logger?.verbose("setCachedAccount called");
  const accountKeys = cacheStorage.getAccountKeys();
  const baseAccountKey = accountKeys.find((accountKey) => {
    return accountKey.startsWith(homeAccountId);
  });
  let cachedAccount = null;
  if (baseAccountKey) {
    cachedAccount = cacheStorage.getAccount(baseAccountKey, logger);
  }
  const baseAccount = cachedAccount || AccountEntity.createAccount({
    homeAccountId,
    idTokenClaims,
    clientInfo,
    environment,
    cloudGraphHostName: authCodePayload?.cloud_graph_host_name,
    msGraphHost: authCodePayload?.msgraph_host,
    nativeAccountId
  }, authority, base64Decode2);
  const tenantProfiles = baseAccount.tenantProfiles || [];
  if (claimsTenantId && !tenantProfiles.find((tenantProfile) => {
    return tenantProfile.tenantId === claimsTenantId;
  })) {
    const newTenantProfile = buildTenantProfileFromIdTokenClaims(homeAccountId, idTokenClaims);
    tenantProfiles.push(newTenantProfile);
  }
  baseAccount.tenantProfiles = tenantProfiles;
  return baseAccount;
}

// node_modules/@azure/msal-common/dist/utils/ClientAssertionUtils.mjs
function getClientAssertion(clientAssertion, clientId, tokenEndpoint) {
  return __async(this, null, function* () {
    if (typeof clientAssertion === "string") {
      return clientAssertion;
    } else {
      const config = {
        clientId,
        tokenEndpoint
      };
      return clientAssertion(config);
    }
  });
}

// node_modules/@azure/msal-common/dist/client/AuthorizationCodeClient.mjs
var AuthorizationCodeClient = class extends BaseClient {
  constructor(configuration, performanceClient) {
    super(configuration, performanceClient);
    this.includeRedirectUri = true;
    this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
  }
  /**
   * Creates the URL of the authorization request letting the user input credentials and consent to the
   * application. The URL target the /authorize endpoint of the authority configured in the
   * application object.
   *
   * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
   * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
   * acquireToken(AuthorizationCodeRequest)
   * @param request
   */
  getAuthCodeUrl(request) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.GetAuthCodeUrl, request.correlationId);
      const queryString = yield invokeAsync(this.createAuthCodeUrlQueryString.bind(this), PerformanceEvents.AuthClientCreateQueryString, this.logger, this.performanceClient, request.correlationId)(request);
      return UrlString.appendQueryString(this.authority.authorizationEndpoint, queryString);
    });
  }
  /**
   * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
   * authorization_code_grant
   * @param request
   */
  acquireToken(request, authCodePayload) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthClientAcquireToken, request.correlationId);
      if (!request.code) {
        throw createClientAuthError(requestCannotBeMade);
      }
      const reqTimestamp = nowSeconds();
      const response = yield invokeAsync(this.executeTokenRequest.bind(this), PerformanceEvents.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, request.correlationId)(this.authority, request);
      const requestId = response.headers?.[HeaderNames.X_MS_REQUEST_ID];
      const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
      responseHandler.validateTokenResponse(response.body);
      return invokeAsync(responseHandler.handleServerTokenResponse.bind(responseHandler), PerformanceEvents.HandleServerTokenResponse, this.logger, this.performanceClient, request.correlationId)(response.body, this.authority, reqTimestamp, request, authCodePayload, void 0, void 0, void 0, requestId);
    });
  }
  /**
   * Handles the hash fragment response from public client code request. Returns a code response used by
   * the client to exchange for a token in acquireToken.
   * @param hashFragment
   */
  handleFragmentResponse(serverParams, cachedState) {
    const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null);
    responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState);
    if (!serverParams.code) {
      throw createClientAuthError(authorizationCodeMissingFromServerResponse);
    }
    return serverParams;
  }
  /**
   * Used to log out the current user, and redirect the user to the postLogoutRedirectUri.
   * Default behaviour is to redirect the user to `window.location.href`.
   * @param authorityUri
   */
  getLogoutUri(logoutRequest) {
    if (!logoutRequest) {
      throw createClientConfigurationError(logoutRequestEmpty);
    }
    const queryString = this.createLogoutUrlQueryString(logoutRequest);
    return UrlString.appendQueryString(this.authority.endSessionEndpoint, queryString);
  }
  /**
   * Executes POST request to token endpoint
   * @param authority
   * @param request
   */
  executeTokenRequest(authority, request) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthClientExecuteTokenRequest, request.correlationId);
      const queryParametersString = this.createTokenQueryParameters(request);
      const endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
      const requestBody = yield invokeAsync(this.createTokenRequestBody.bind(this), PerformanceEvents.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, request.correlationId)(request);
      let ccsCredential = void 0;
      if (request.clientInfo) {
        try {
          const clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils.base64Decode);
          ccsCredential = {
            credential: `${clientInfo.uid}${Separators.CLIENT_INFO_SEPARATOR}${clientInfo.utid}`,
            type: CcsCredentialType.HOME_ACCOUNT_ID
          };
        } catch (e) {
          this.logger.verbose("Could not parse client info for CCS Header: " + e);
        }
      }
      const headers = this.createTokenRequestHeaders(ccsCredential || request.ccsCredential);
      const thumbprint = {
        clientId: request.tokenBodyParameters?.clientId || this.config.authOptions.clientId,
        authority: authority.canonicalAuthority,
        scopes: request.scopes,
        claims: request.claims,
        authenticationScheme: request.authenticationScheme,
        resourceRequestMethod: request.resourceRequestMethod,
        resourceRequestUri: request.resourceRequestUri,
        shrClaims: request.shrClaims,
        sshKid: request.sshKid
      };
      return invokeAsync(this.executePostToTokenEndpoint.bind(this), PerformanceEvents.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, request.correlationId)(endpoint, requestBody, headers, thumbprint, request.correlationId, PerformanceEvents.AuthorizationCodeClientExecutePostToTokenEndpoint);
    });
  }
  /**
   * Generates a map for all the params to be sent to the service
   * @param request
   */
  createTokenRequestBody(request) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthClientCreateTokenRequestBody, request.correlationId);
      const parameterBuilder = new RequestParameterBuilder();
      parameterBuilder.addClientId(request.tokenBodyParameters?.[CLIENT_ID] || this.config.authOptions.clientId);
      if (!this.includeRedirectUri) {
        RequestValidator.validateRedirectUri(request.redirectUri);
      } else {
        parameterBuilder.addRedirectUri(request.redirectUri);
      }
      parameterBuilder.addScopes(request.scopes, true, this.oidcDefaultScopes);
      parameterBuilder.addAuthorizationCode(request.code);
      parameterBuilder.addLibraryInfo(this.config.libraryInfo);
      parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
      parameterBuilder.addThrottling();
      if (this.serverTelemetryManager && !isOidcProtocolMode(this.config)) {
        parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
      }
      if (request.codeVerifier) {
        parameterBuilder.addCodeVerifier(request.codeVerifier);
      }
      if (this.config.clientCredentials.clientSecret) {
        parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
      }
      if (this.config.clientCredentials.clientAssertion) {
        const clientAssertion = this.config.clientCredentials.clientAssertion;
        parameterBuilder.addClientAssertion(yield getClientAssertion(clientAssertion.assertion, this.config.authOptions.clientId, request.resourceRequestUri));
        parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
      }
      parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
      parameterBuilder.addClientInfo();
      if (request.authenticationScheme === AuthenticationScheme.POP) {
        const popTokenGenerator = new PopTokenGenerator(this.cryptoUtils, this.performanceClient);
        const reqCnfData = yield invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PerformanceEvents.PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
        parameterBuilder.addPopToken(reqCnfData.reqCnfString);
      } else if (request.authenticationScheme === AuthenticationScheme.SSH) {
        if (request.sshJwk) {
          parameterBuilder.addSshJwk(request.sshJwk);
        } else {
          throw createClientConfigurationError(missingSshJwk);
        }
      }
      const correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
      parameterBuilder.addCorrelationId(correlationId);
      if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
      }
      let ccsCred = void 0;
      if (request.clientInfo) {
        try {
          const clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils.base64Decode);
          ccsCred = {
            credential: `${clientInfo.uid}${Separators.CLIENT_INFO_SEPARATOR}${clientInfo.utid}`,
            type: CcsCredentialType.HOME_ACCOUNT_ID
          };
        } catch (e) {
          this.logger.verbose("Could not parse client info for CCS Header: " + e);
        }
      } else {
        ccsCred = request.ccsCredential;
      }
      if (this.config.systemOptions.preventCorsPreflight && ccsCred) {
        switch (ccsCred.type) {
          case CcsCredentialType.HOME_ACCOUNT_ID:
            try {
              const clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
              parameterBuilder.addCcsOid(clientInfo);
            } catch (e) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
            }
            break;
          case CcsCredentialType.UPN:
            parameterBuilder.addCcsUpn(ccsCred.credential);
            break;
        }
      }
      if (request.tokenBodyParameters) {
        parameterBuilder.addExtraQueryParameters(request.tokenBodyParameters);
      }
      if (request.enableSpaAuthorizationCode && (!request.tokenBodyParameters || !request.tokenBodyParameters[RETURN_SPA_CODE])) {
        parameterBuilder.addExtraQueryParameters({
          [RETURN_SPA_CODE]: "1"
        });
      }
      return parameterBuilder.createQueryString();
    });
  }
  /**
   * This API validates the `AuthorizationCodeUrlRequest` and creates a URL
   * @param request
   */
  createAuthCodeUrlQueryString(request) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthClientCreateQueryString, request.correlationId);
      const parameterBuilder = new RequestParameterBuilder();
      parameterBuilder.addClientId(request.extraQueryParameters?.[CLIENT_ID] || this.config.authOptions.clientId);
      const requestScopes = [
        ...request.scopes || [],
        ...request.extraScopesToConsent || []
      ];
      parameterBuilder.addScopes(requestScopes, true, this.oidcDefaultScopes);
      parameterBuilder.addRedirectUri(request.redirectUri);
      const correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
      parameterBuilder.addCorrelationId(correlationId);
      parameterBuilder.addResponseMode(request.responseMode);
      parameterBuilder.addResponseTypeCode();
      parameterBuilder.addLibraryInfo(this.config.libraryInfo);
      if (!isOidcProtocolMode(this.config)) {
        parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
      }
      parameterBuilder.addClientInfo();
      if (request.codeChallenge && request.codeChallengeMethod) {
        parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
      }
      if (request.prompt) {
        parameterBuilder.addPrompt(request.prompt);
      }
      if (request.domainHint) {
        parameterBuilder.addDomainHint(request.domainHint);
      }
      if (request.prompt !== PromptValue.SELECT_ACCOUNT) {
        if (request.sid && request.prompt === PromptValue.NONE) {
          this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request");
          parameterBuilder.addSid(request.sid);
        } else if (request.account) {
          const accountSid = this.extractAccountSid(request.account);
          let accountLoginHintClaim = this.extractLoginHint(request.account);
          if (accountLoginHintClaim && request.domainHint) {
            this.logger.warning(`AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint`);
            accountLoginHintClaim = null;
          }
          if (accountLoginHintClaim) {
            this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account");
            parameterBuilder.addLoginHint(accountLoginHintClaim);
            try {
              const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
              parameterBuilder.addCcsOid(clientInfo);
            } catch (e) {
              this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
            }
          } else if (accountSid && request.prompt === PromptValue.NONE) {
            this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account");
            parameterBuilder.addSid(accountSid);
            try {
              const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
              parameterBuilder.addCcsOid(clientInfo);
            } catch (e) {
              this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
            }
          } else if (request.loginHint) {
            this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request");
            parameterBuilder.addLoginHint(request.loginHint);
            parameterBuilder.addCcsUpn(request.loginHint);
          } else if (request.account.username) {
            this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account");
            parameterBuilder.addLoginHint(request.account.username);
            try {
              const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
              parameterBuilder.addCcsOid(clientInfo);
            } catch (e) {
              this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
            }
          }
        } else if (request.loginHint) {
          this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request");
          parameterBuilder.addLoginHint(request.loginHint);
          parameterBuilder.addCcsUpn(request.loginHint);
        }
      } else {
        this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
      }
      if (request.nonce) {
        parameterBuilder.addNonce(request.nonce);
      }
      if (request.state) {
        parameterBuilder.addState(request.state);
      }
      if (request.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
      }
      if (request.extraQueryParameters) {
        parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
      }
      if (request.nativeBroker) {
        parameterBuilder.addNativeBroker();
        if (request.authenticationScheme === AuthenticationScheme.POP) {
          const popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
          const reqCnfData = yield invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PerformanceEvents.PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
          parameterBuilder.addPopToken(reqCnfData.reqCnfHash);
        }
      }
      return parameterBuilder.createQueryString();
    });
  }
  /**
   * This API validates the `EndSessionRequest` and creates a URL
   * @param request
   */
  createLogoutUrlQueryString(request) {
    const parameterBuilder = new RequestParameterBuilder();
    if (request.postLogoutRedirectUri) {
      parameterBuilder.addPostLogoutRedirectUri(request.postLogoutRedirectUri);
    }
    if (request.correlationId) {
      parameterBuilder.addCorrelationId(request.correlationId);
    }
    if (request.idTokenHint) {
      parameterBuilder.addIdTokenHint(request.idTokenHint);
    }
    if (request.state) {
      parameterBuilder.addState(request.state);
    }
    if (request.logoutHint) {
      parameterBuilder.addLogoutHint(request.logoutHint);
    }
    if (request.extraQueryParameters) {
      parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
    }
    return parameterBuilder.createQueryString();
  }
  /**
   * Helper to get sid from account. Returns null if idTokenClaims are not present or sid is not present.
   * @param account
   */
  extractAccountSid(account) {
    return account.idTokenClaims?.sid || null;
  }
  extractLoginHint(account) {
    return account.idTokenClaims?.login_hint || null;
  }
};

// node_modules/@azure/msal-common/dist/client/RefreshTokenClient.mjs
var DEFAULT_REFRESH_TOKEN_EXPIRATION_OFFSET_SECONDS = 300;
var RefreshTokenClient = class extends BaseClient {
  constructor(configuration, performanceClient) {
    super(configuration, performanceClient);
  }
  acquireToken(request) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RefreshTokenClientAcquireToken, request.correlationId);
      const reqTimestamp = nowSeconds();
      const response = yield invokeAsync(this.executeTokenRequest.bind(this), PerformanceEvents.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, request.correlationId)(request, this.authority);
      const requestId = response.headers?.[HeaderNames.X_MS_REQUEST_ID];
      const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
      responseHandler.validateTokenResponse(response.body);
      return invokeAsync(responseHandler.handleServerTokenResponse.bind(responseHandler), PerformanceEvents.HandleServerTokenResponse, this.logger, this.performanceClient, request.correlationId)(response.body, this.authority, reqTimestamp, request, void 0, void 0, true, request.forceCache, requestId);
    });
  }
  /**
   * Gets cached refresh token and attaches to request, then calls acquireToken API
   * @param request
   */
  acquireTokenByRefreshToken(request) {
    return __async(this, null, function* () {
      if (!request) {
        throw createClientConfigurationError(tokenRequestEmpty);
      }
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RefreshTokenClientAcquireTokenByRefreshToken, request.correlationId);
      if (!request.account) {
        throw createClientAuthError(noAccountInSilentRequest);
      }
      const isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment);
      if (isFOCI) {
        try {
          return yield invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, true);
        } catch (e) {
          const noFamilyRTInCache = e instanceof InteractionRequiredAuthError && e.errorCode === noTokensFound;
          const clientMismatchErrorWithFamilyRT = e instanceof ServerError && e.errorCode === Errors.INVALID_GRANT_ERROR && e.subError === Errors.CLIENT_MISMATCH_ERROR;
          if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) {
            return invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, false);
          } else {
            throw e;
          }
        }
      }
      return invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, false);
    });
  }
  /**
   * makes a network call to acquire tokens by exchanging RefreshToken available in userCache; throws if refresh token is not cached
   * @param request
   */
  acquireTokenWithCachedRefreshToken(request, foci) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, request.correlationId);
      const refreshToken = invoke(this.cacheManager.getRefreshToken.bind(this.cacheManager), PerformanceEvents.CacheManagerGetRefreshToken, this.logger, this.performanceClient, request.correlationId)(request.account, foci, void 0, this.performanceClient, request.correlationId);
      if (!refreshToken) {
        throw createInteractionRequiredAuthError(noTokensFound);
      }
      if (refreshToken.expiresOn && isTokenExpired(refreshToken.expiresOn, request.refreshTokenExpirationOffsetSeconds || DEFAULT_REFRESH_TOKEN_EXPIRATION_OFFSET_SECONDS)) {
        throw createInteractionRequiredAuthError(refreshTokenExpired);
      }
      const refreshTokenRequest = __spreadProps(__spreadValues({}, request), {
        refreshToken: refreshToken.secret,
        authenticationScheme: request.authenticationScheme || AuthenticationScheme.BEARER,
        ccsCredential: {
          credential: request.account.homeAccountId,
          type: CcsCredentialType.HOME_ACCOUNT_ID
        }
      });
      try {
        return yield invokeAsync(this.acquireToken.bind(this), PerformanceEvents.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(refreshTokenRequest);
      } catch (e) {
        if (e instanceof InteractionRequiredAuthError && e.subError === badToken) {
          this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
          const badRefreshTokenKey = generateCredentialKey(refreshToken);
          this.cacheManager.removeRefreshToken(badRefreshTokenKey);
        }
        throw e;
      }
    });
  }
  /**
   * Constructs the network message and makes a NW call to the underlying secure token service
   * @param request
   * @param authority
   */
  executeTokenRequest(request, authority) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RefreshTokenClientExecuteTokenRequest, request.correlationId);
      const queryParametersString = this.createTokenQueryParameters(request);
      const endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
      const requestBody = yield invokeAsync(this.createTokenRequestBody.bind(this), PerformanceEvents.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, request.correlationId)(request);
      const headers = this.createTokenRequestHeaders(request.ccsCredential);
      const thumbprint = {
        clientId: request.tokenBodyParameters?.clientId || this.config.authOptions.clientId,
        authority: authority.canonicalAuthority,
        scopes: request.scopes,
        claims: request.claims,
        authenticationScheme: request.authenticationScheme,
        resourceRequestMethod: request.resourceRequestMethod,
        resourceRequestUri: request.resourceRequestUri,
        shrClaims: request.shrClaims,
        sshKid: request.sshKid
      };
      return invokeAsync(this.executePostToTokenEndpoint.bind(this), PerformanceEvents.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, request.correlationId)(endpoint, requestBody, headers, thumbprint, request.correlationId, PerformanceEvents.RefreshTokenClientExecutePostToTokenEndpoint);
    });
  }
  /**
   * Helper function to create the token request body
   * @param request
   */
  createTokenRequestBody(request) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RefreshTokenClientCreateTokenRequestBody, request.correlationId);
      const correlationId = request.correlationId;
      const parameterBuilder = new RequestParameterBuilder();
      parameterBuilder.addClientId(request.tokenBodyParameters?.[CLIENT_ID] || this.config.authOptions.clientId);
      if (request.redirectUri) {
        parameterBuilder.addRedirectUri(request.redirectUri);
      }
      parameterBuilder.addScopes(request.scopes, true, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes);
      parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
      parameterBuilder.addClientInfo();
      parameterBuilder.addLibraryInfo(this.config.libraryInfo);
      parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
      parameterBuilder.addThrottling();
      if (this.serverTelemetryManager && !isOidcProtocolMode(this.config)) {
        parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
      }
      parameterBuilder.addCorrelationId(correlationId);
      parameterBuilder.addRefreshToken(request.refreshToken);
      if (this.config.clientCredentials.clientSecret) {
        parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
      }
      if (this.config.clientCredentials.clientAssertion) {
        const clientAssertion = this.config.clientCredentials.clientAssertion;
        parameterBuilder.addClientAssertion(yield getClientAssertion(clientAssertion.assertion, this.config.authOptions.clientId, request.resourceRequestUri));
        parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
      }
      if (request.authenticationScheme === AuthenticationScheme.POP) {
        const popTokenGenerator = new PopTokenGenerator(this.cryptoUtils, this.performanceClient);
        const reqCnfData = yield invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PerformanceEvents.PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
        parameterBuilder.addPopToken(reqCnfData.reqCnfString);
      } else if (request.authenticationScheme === AuthenticationScheme.SSH) {
        if (request.sshJwk) {
          parameterBuilder.addSshJwk(request.sshJwk);
        } else {
          throw createClientConfigurationError(missingSshJwk);
        }
      }
      if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
      }
      if (this.config.systemOptions.preventCorsPreflight && request.ccsCredential) {
        switch (request.ccsCredential.type) {
          case CcsCredentialType.HOME_ACCOUNT_ID:
            try {
              const clientInfo = buildClientInfoFromHomeAccountId(request.ccsCredential.credential);
              parameterBuilder.addCcsOid(clientInfo);
            } catch (e) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
            }
            break;
          case CcsCredentialType.UPN:
            parameterBuilder.addCcsUpn(request.ccsCredential.credential);
            break;
        }
      }
      if (request.tokenBodyParameters) {
        parameterBuilder.addExtraQueryParameters(request.tokenBodyParameters);
      }
      return parameterBuilder.createQueryString();
    });
  }
};

// node_modules/@azure/msal-common/dist/client/SilentFlowClient.mjs
var SilentFlowClient = class extends BaseClient {
  constructor(configuration, performanceClient) {
    super(configuration, performanceClient);
  }
  /**
   * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
   * the given token and returns the renewed token
   * @param request
   */
  acquireToken(request) {
    return __async(this, null, function* () {
      try {
        const [authResponse, cacheOutcome] = yield this.acquireCachedToken(__spreadProps(__spreadValues({}, request), {
          scopes: request.scopes?.length ? request.scopes : [...OIDC_DEFAULT_SCOPES]
        }));
        if (cacheOutcome === CacheOutcome.PROACTIVELY_REFRESHED) {
          this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
          const refreshTokenClient = new RefreshTokenClient(this.config, this.performanceClient);
          refreshTokenClient.acquireTokenByRefreshToken(request).catch(() => {
          });
        }
        return authResponse;
      } catch (e) {
        if (e instanceof ClientAuthError && e.errorCode === tokenRefreshRequired) {
          const refreshTokenClient = new RefreshTokenClient(this.config, this.performanceClient);
          return refreshTokenClient.acquireTokenByRefreshToken(request);
        } else {
          throw e;
        }
      }
    });
  }
  /**
   * Retrieves token from cache or throws an error if it must be refreshed.
   * @param request
   */
  acquireCachedToken(request) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.SilentFlowClientAcquireCachedToken, request.correlationId);
      let lastCacheOutcome = CacheOutcome.NOT_APPLICABLE;
      if (request.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !StringUtils.isEmptyObj(request.claims)) {
        this.setCacheOutcome(CacheOutcome.FORCE_REFRESH_OR_CLAIMS, request.correlationId);
        throw createClientAuthError(tokenRefreshRequired);
      }
      if (!request.account) {
        throw createClientAuthError(noAccountInSilentRequest);
      }
      const requestTenantId = request.account.tenantId || getTenantFromAuthorityString(request.authority);
      const tokenKeys = this.cacheManager.getTokenKeys();
      const cachedAccessToken = this.cacheManager.getAccessToken(request.account, request, tokenKeys, requestTenantId, this.performanceClient, request.correlationId);
      if (!cachedAccessToken) {
        this.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN, request.correlationId);
        throw createClientAuthError(tokenRefreshRequired);
      } else if (wasClockTurnedBack(cachedAccessToken.cachedAt) || isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
        this.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED, request.correlationId);
        throw createClientAuthError(tokenRefreshRequired);
      } else if (cachedAccessToken.refreshOn && isTokenExpired(cachedAccessToken.refreshOn, 0)) {
        lastCacheOutcome = CacheOutcome.PROACTIVELY_REFRESHED;
      }
      const environment = request.authority || this.authority.getPreferredCache();
      const cacheRecord = {
        account: this.cacheManager.readAccountFromCache(request.account),
        accessToken: cachedAccessToken,
        idToken: this.cacheManager.getIdToken(request.account, tokenKeys, requestTenantId, this.performanceClient, request.correlationId),
        refreshToken: null,
        appMetadata: this.cacheManager.readAppMetadataFromCache(environment)
      };
      this.setCacheOutcome(lastCacheOutcome, request.correlationId);
      if (this.config.serverTelemetryManager) {
        this.config.serverTelemetryManager.incrementCacheHits();
      }
      return [
        yield invokeAsync(this.generateResultFromCacheRecord.bind(this), PerformanceEvents.SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, request.correlationId)(cacheRecord, request),
        lastCacheOutcome
      ];
    });
  }
  setCacheOutcome(cacheOutcome, correlationId) {
    this.serverTelemetryManager?.setCacheOutcome(cacheOutcome);
    this.performanceClient?.addFields({
      cacheOutcome
    }, correlationId);
    if (cacheOutcome !== CacheOutcome.NOT_APPLICABLE) {
      this.logger.info(`Token refresh is required due to cache outcome: ${cacheOutcome}`);
    }
  }
  /**
   * Helper function to build response object from the CacheRecord
   * @param cacheRecord
   */
  generateResultFromCacheRecord(cacheRecord, request) {
    return __async(this, null, function* () {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.SilentFlowClientGenerateResultFromCacheRecord, request.correlationId);
      let idTokenClaims;
      if (cacheRecord.idToken) {
        idTokenClaims = extractTokenClaims(cacheRecord.idToken.secret, this.config.cryptoInterface.base64Decode);
      }
      if (request.maxAge || request.maxAge === 0) {
        const authTime = idTokenClaims?.auth_time;
        if (!authTime) {
          throw createClientAuthError(authTimeNotFound);
        }
        checkMaxAge(authTime, request.maxAge);
      }
      return ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, request, idTokenClaims);
    });
  }
};

// node_modules/@azure/msal-common/dist/network/INetworkModule.mjs
var StubbedNetworkModule = {
  sendGetRequestAsync: () => {
    return Promise.reject(createClientAuthError(methodNotImplemented));
  },
  sendPostRequestAsync: () => {
    return Promise.reject(createClientAuthError(methodNotImplemented));
  }
};

// node_modules/@azure/msal-common/dist/error/JoseHeaderErrorCodes.mjs
var missingKidError = "missing_kid_error";
var missingAlgError = "missing_alg_error";

// node_modules/@azure/msal-common/dist/error/JoseHeaderError.mjs
var JoseHeaderErrorMessages = {
  [missingKidError]: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided.",
  [missingAlgError]: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
};
var JoseHeaderError = class _JoseHeaderError extends AuthError {
  constructor(errorCode, errorMessage) {
    super(errorCode, errorMessage);
    this.name = "JoseHeaderError";
    Object.setPrototypeOf(this, _JoseHeaderError.prototype);
  }
};
function createJoseHeaderError(code) {
  return new JoseHeaderError(code, JoseHeaderErrorMessages[code]);
}

// node_modules/@azure/msal-common/dist/crypto/JoseHeader.mjs
var JoseHeader = class _JoseHeader {
  constructor(options) {
    this.typ = options.typ;
    this.alg = options.alg;
    this.kid = options.kid;
  }
  /**
   * Builds SignedHttpRequest formatted JOSE Header from the
   * JOSE Header options provided or previously set on the object and returns
   * the stringified header object.
   * Throws if keyId or algorithm aren't provided since they are required for Access Token Binding.
   * @param shrHeaderOptions
   * @returns
   */
  static getShrHeaderString(shrHeaderOptions) {
    if (!shrHeaderOptions.kid) {
      throw createJoseHeaderError(missingKidError);
    }
    if (!shrHeaderOptions.alg) {
      throw createJoseHeaderError(missingAlgError);
    }
    const shrHeader = new _JoseHeader({
      // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
      typ: shrHeaderOptions.typ || JsonWebTokenTypes.Pop,
      kid: shrHeaderOptions.kid,
      alg: shrHeaderOptions.alg
    });
    return JSON.stringify(shrHeader);
  }
};

// node_modules/@azure/msal-common/dist/telemetry/server/ServerTelemetryManager.mjs
var ServerTelemetryManager = class _ServerTelemetryManager {
  constructor(telemetryRequest, cacheManager) {
    this.cacheOutcome = CacheOutcome.NOT_APPLICABLE;
    this.cacheManager = cacheManager;
    this.apiId = telemetryRequest.apiId;
    this.correlationId = telemetryRequest.correlationId;
    this.wrapperSKU = telemetryRequest.wrapperSKU || Constants.EMPTY_STRING;
    this.wrapperVer = telemetryRequest.wrapperVer || Constants.EMPTY_STRING;
    this.telemetryCacheKey = SERVER_TELEM_CONSTANTS.CACHE_KEY + Separators.CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
  }
  /**
   * API to add MSER Telemetry to request
   */
  generateCurrentRequestHeaderValue() {
    const request = `${this.apiId}${SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR}${this.cacheOutcome}`;
    const platformFields = [this.wrapperSKU, this.wrapperVer].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
    const regionDiscoveryFields = this.getRegionDiscoveryFields();
    const requestWithRegionDiscoveryFields = [
      request,
      regionDiscoveryFields
    ].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
    return [
      SERVER_TELEM_CONSTANTS.SCHEMA_VERSION,
      requestWithRegionDiscoveryFields,
      platformFields
    ].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
  }
  /**
   * API to add MSER Telemetry for the last failed request
   */
  generateLastRequestHeaderValue() {
    const lastRequests = this.getLastRequests();
    const maxErrors = _ServerTelemetryManager.maxErrorsToSend(lastRequests);
    const failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
    const errors = lastRequests.errors.slice(0, maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
    const errorCount = lastRequests.errors.length;
    const overflow = maxErrors < errorCount ? SERVER_TELEM_CONSTANTS.OVERFLOW_TRUE : SERVER_TELEM_CONSTANTS.OVERFLOW_FALSE;
    const platformFields = [errorCount, overflow].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
    return [
      SERVER_TELEM_CONSTANTS.SCHEMA_VERSION,
      lastRequests.cacheHits,
      failedRequests,
      errors,
      platformFields
    ].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
  }
  /**
   * API to cache token failures for MSER data capture
   * @param error
   */
  cacheFailedRequest(error) {
    const lastRequests = this.getLastRequests();
    if (lastRequests.errors.length >= SERVER_TELEM_CONSTANTS.MAX_CACHED_ERRORS) {
      lastRequests.failedRequests.shift();
      lastRequests.failedRequests.shift();
      lastRequests.errors.shift();
    }
    lastRequests.failedRequests.push(this.apiId, this.correlationId);
    if (error instanceof Error && !!error && error.toString()) {
      if (error instanceof AuthError) {
        if (error.subError) {
          lastRequests.errors.push(error.subError);
        } else if (error.errorCode) {
          lastRequests.errors.push(error.errorCode);
        } else {
          lastRequests.errors.push(error.toString());
        }
      } else {
        lastRequests.errors.push(error.toString());
      }
    } else {
      lastRequests.errors.push(SERVER_TELEM_CONSTANTS.UNKNOWN_ERROR);
    }
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
    return;
  }
  /**
   * Update server telemetry cache entry by incrementing cache hit counter
   */
  incrementCacheHits() {
    const lastRequests = this.getLastRequests();
    lastRequests.cacheHits += 1;
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
    return lastRequests.cacheHits;
  }
  /**
   * Get the server telemetry entity from cache or initialize a new one
   */
  getLastRequests() {
    const initialValue = {
      failedRequests: [],
      errors: [],
      cacheHits: 0
    };
    const lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
    return lastRequests || initialValue;
  }
  /**
   * Remove server telemetry cache entry
   */
  clearTelemetryCache() {
    const lastRequests = this.getLastRequests();
    const numErrorsFlushed = _ServerTelemetryManager.maxErrorsToSend(lastRequests);
    const errorCount = lastRequests.errors.length;
    if (numErrorsFlushed === errorCount) {
      this.cacheManager.removeItem(this.telemetryCacheKey);
    } else {
      const serverTelemEntity = {
        failedRequests: lastRequests.failedRequests.slice(numErrorsFlushed * 2),
        errors: lastRequests.errors.slice(numErrorsFlushed),
        cacheHits: 0
      };
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity);
    }
  }
  /**
   * Returns the maximum number of errors that can be flushed to the server in the next network request
   * @param serverTelemetryEntity
   */
  static maxErrorsToSend(serverTelemetryEntity) {
    let i;
    let maxErrors = 0;
    let dataSize = 0;
    const errorCount = serverTelemetryEntity.errors.length;
    for (i = 0; i < errorCount; i++) {
      const apiId = serverTelemetryEntity.failedRequests[2 * i] || Constants.EMPTY_STRING;
      const correlationId = serverTelemetryEntity.failedRequests[2 * i + 1] || Constants.EMPTY_STRING;
      const errorCode = serverTelemetryEntity.errors[i] || Constants.EMPTY_STRING;
      dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
      if (dataSize < SERVER_TELEM_CONSTANTS.MAX_LAST_HEADER_BYTES) {
        maxErrors += 1;
      } else {
        break;
      }
    }
    return maxErrors;
  }
  /**
   * Get the region discovery fields
   *
   * @returns string
   */
  getRegionDiscoveryFields() {
    const regionDiscoveryFields = [];
    regionDiscoveryFields.push(this.regionUsed || Constants.EMPTY_STRING);
    regionDiscoveryFields.push(this.regionSource || Constants.EMPTY_STRING);
    regionDiscoveryFields.push(this.regionOutcome || Constants.EMPTY_STRING);
    return regionDiscoveryFields.join(",");
  }
  /**
   * Update the region discovery metadata
   *
   * @param regionDiscoveryMetadata
   * @returns void
   */
  updateRegionDiscoveryMetadata(regionDiscoveryMetadata) {
    this.regionUsed = regionDiscoveryMetadata.region_used;
    this.regionSource = regionDiscoveryMetadata.region_source;
    this.regionOutcome = regionDiscoveryMetadata.region_outcome;
  }
  /**
   * Set cache outcome
   */
  setCacheOutcome(cacheOutcome) {
    this.cacheOutcome = cacheOutcome;
  }
};

// node_modules/@azure/msal-common/dist/telemetry/performance/PerformanceClient.mjs
function startContext(event, abbreviations, stack) {
  if (!stack) {
    return;
  }
  stack.push({
    name: abbreviations.get(event.name) || event.name
  });
}
function endContext(event, abbreviations, stack, error) {
  if (!stack?.length) {
    return;
  }
  const peek = (stack2) => {
    return stack2.length ? stack2[stack2.length - 1] : void 0;
  };
  const abbrEventName = abbreviations.get(event.name) || event.name;
  const top = peek(stack);
  if (top?.name !== abbrEventName) {
    return;
  }
  const current = stack?.pop();
  if (!current) {
    return;
  }
  const errorCode = error instanceof AuthError ? error.errorCode : error instanceof Error ? error.name : void 0;
  const subErr = error instanceof AuthError ? error.subError : void 0;
  if (errorCode && current.childErr !== errorCode) {
    current.err = errorCode;
    if (subErr) {
      current.subErr = subErr;
    }
  }
  delete current.name;
  delete current.childErr;
  const context = __spreadProps(__spreadValues({}, current), {
    dur: event.durationMs
  });
  if (!event.success) {
    context.fail = 1;
  }
  const parent = peek(stack);
  if (!parent) {
    return { [abbrEventName]: context };
  }
  if (errorCode) {
    parent.childErr = errorCode;
  }
  let childName;
  if (!parent[abbrEventName]) {
    childName = abbrEventName;
  } else {
    const siblings = Object.keys(parent).filter((key) => key.startsWith(abbrEventName)).length;
    childName = `${abbrEventName}_${siblings + 1}`;
  }
  parent[childName] = context;
  return parent;
}
function addError(error, logger, event, stackMaxSize = 5) {
  if (!(error instanceof Error)) {
    logger.trace("PerformanceClient.addErrorStack: Input error is not instance of Error", event.correlationId);
    return;
  } else if (error instanceof AuthError) {
    event.errorCode = error.errorCode;
    event.subErrorCode = error.subError;
    if (error instanceof ServerError || error instanceof InteractionRequiredAuthError) {
      event.serverErrorNo = error.errorNo;
    }
    return;
  } else if (error instanceof CacheError) {
    event.errorCode = error.errorCode;
    return;
  } else if (event.errorStack?.length) {
    logger.trace("PerformanceClient.addErrorStack: Stack already exist", event.correlationId);
    return;
  } else if (!error.stack?.length) {
    logger.trace("PerformanceClient.addErrorStack: Input stack is empty", event.correlationId);
    return;
  }
  if (error.stack) {
    event.errorStack = compactStack(error.stack, stackMaxSize);
  }
  event.errorName = error.name;
}
function compactStack(stack, stackMaxSize) {
  if (stackMaxSize < 0) {
    return [];
  }
  const stackArr = stack.split("\n") || [];
  if (stackArr.length < 2) {
    return [];
  }
  const res = [];
  for (let ix = Math.max(stackArr.length - stackMaxSize - 1, 1); ix < stackArr.length; ix++) {
    const line = stackArr[ix];
    if (res.length >= stackMaxSize) {
      break;
    }
    res.push(compactStackLine(line));
  }
  return res;
}
function compactStackLine(line) {
  const filePathIx = line.lastIndexOf(" ") + 1;
  if (filePathIx < 1) {
    return line;
  }
  const filePath = line.substring(filePathIx);
  let fileNameIx = filePath.lastIndexOf("/");
  fileNameIx = fileNameIx < 0 ? filePath.lastIndexOf("\\") : fileNameIx;
  if (fileNameIx >= 0) {
    return (line.substring(0, filePathIx) + "(" + filePath.substring(fileNameIx + 1) + (filePath.charAt(filePath.length - 1) === ")" ? "" : ")")).trimStart();
  }
  return line.trimStart();
}
var PerformanceClient = class {
  /**
   * Creates an instance of PerformanceClient,
   * an abstract class containing core performance telemetry logic.
   *
   * @constructor
   * @param {string} clientId Client ID of the application
   * @param {string} authority Authority used by the application
   * @param {Logger} logger Logger used by the application
   * @param {string} libraryName Name of the library
   * @param {string} libraryVersion Version of the library
   * @param {ApplicationTelemetry} applicationTelemetry application name and version
   * @param {Set<String>} intFields integer fields to be truncated
   * @param {Map<string, string>} abbreviations event name abbreviations
   */
  constructor(clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry, intFields, abbreviations) {
    this.authority = authority;
    this.libraryName = libraryName;
    this.libraryVersion = libraryVersion;
    this.applicationTelemetry = applicationTelemetry;
    this.clientId = clientId;
    this.logger = logger;
    this.callbacks = /* @__PURE__ */ new Map();
    this.eventsByCorrelationId = /* @__PURE__ */ new Map();
    this.eventStack = /* @__PURE__ */ new Map();
    this.queueMeasurements = /* @__PURE__ */ new Map();
    this.preQueueTimeByCorrelationId = /* @__PURE__ */ new Map();
    this.intFields = intFields || /* @__PURE__ */ new Set();
    for (const item of IntFields) {
      this.intFields.add(item);
    }
    this.abbreviations = abbreviations || /* @__PURE__ */ new Map();
    for (const [key, value] of PerformanceEventAbbreviations) {
      this.abbreviations.set(key, value);
    }
  }
  /**
   * Starts and returns an platform-specific implementation of IPerformanceMeasurement.
   * Note: this function can be changed to abstract at the next major version bump.
   *
   * @param {string} measureName
   * @param {string} correlationId
   * @returns {IPerformanceMeasurement}
   * @deprecated This method will be removed in the next major version
   */
  startPerformanceMeasurement(measureName, correlationId) {
    return {};
  }
  /**
   * Gets map of pre-queue times by correlation Id
   *
   * @param {PerformanceEvents} eventName
   * @param {string} correlationId
   * @returns {number}
   */
  getPreQueueTime(eventName, correlationId) {
    const preQueueEvent = this.preQueueTimeByCorrelationId.get(correlationId);
    if (!preQueueEvent) {
      this.logger.trace(`PerformanceClient.getPreQueueTime: no pre-queue times found for correlationId: ${correlationId}, unable to add queue measurement`);
      return;
    } else if (preQueueEvent.name !== eventName) {
      this.logger.trace(`PerformanceClient.getPreQueueTime: no pre-queue time found for ${eventName}, unable to add queue measurement`);
      return;
    }
    return preQueueEvent.time;
  }
  /**
   * Calculates the difference between current time and time when function was queued.
   * Note: It is possible to have 0 as the queue time if the current time and the queued time was the same.
   *
   * @param {number} preQueueTime
   * @param {number} currentTime
   * @returns {number}
   */
  calculateQueuedTime(preQueueTime, currentTime) {
    if (preQueueTime < 1) {
      this.logger.trace(`PerformanceClient: preQueueTime should be a positive integer and not ${preQueueTime}`);
      return 0;
    }
    if (currentTime < 1) {
      this.logger.trace(`PerformanceClient: currentTime should be a positive integer and not ${currentTime}`);
      return 0;
    }
    if (currentTime < preQueueTime) {
      this.logger.trace("PerformanceClient: currentTime is less than preQueueTime, check how time is being retrieved");
      return 0;
    }
    return currentTime - preQueueTime;
  }
  /**
   * Adds queue measurement time to QueueMeasurements array for given correlation ID.
   *
   * @param {PerformanceEvents} eventName
   * @param {?string} correlationId
   * @param {?number} queueTime
   * @param {?boolean} manuallyCompleted - indicator for manually completed queue measurements
   * @returns
   */
  addQueueMeasurement(eventName, correlationId, queueTime, manuallyCompleted) {
    if (!correlationId) {
      this.logger.trace(`PerformanceClient.addQueueMeasurement: correlationId not provided for ${eventName}, cannot add queue measurement`);
      return;
    }
    if (queueTime === 0) {
      this.logger.trace(`PerformanceClient.addQueueMeasurement: queue time provided for ${eventName} is ${queueTime}`);
    } else if (!queueTime) {
      this.logger.trace(`PerformanceClient.addQueueMeasurement: no queue time provided for ${eventName}`);
      return;
    }
    const queueMeasurement = {
      eventName,
      // Always default queue time to 0 for manually completed (improperly instrumented)
      queueTime: manuallyCompleted ? 0 : queueTime,
      manuallyCompleted
    };
    const existingMeasurements = this.queueMeasurements.get(correlationId);
    if (existingMeasurements) {
      existingMeasurements.push(queueMeasurement);
      this.queueMeasurements.set(correlationId, existingMeasurements);
    } else {
      this.logger.trace(`PerformanceClient.addQueueMeasurement: adding correlationId ${correlationId} to queue measurements`);
      const measurementArray = [queueMeasurement];
      this.queueMeasurements.set(correlationId, measurementArray);
    }
    this.preQueueTimeByCorrelationId.delete(correlationId);
  }
  /**
   * Starts measuring performance for a given operation. Returns a function that should be used to end the measurement.
   *
   * @param {PerformanceEvents} measureName
   * @param {?string} [correlationId]
   * @returns {InProgressPerformanceEvent}
   */
  startMeasurement(measureName, correlationId) {
    const eventCorrelationId = correlationId || this.generateId();
    if (!correlationId) {
      this.logger.info(`PerformanceClient: No correlation id provided for ${measureName}, generating`, eventCorrelationId);
    }
    this.logger.trace(`PerformanceClient: Performance measurement started for ${measureName}`, eventCorrelationId);
    const inProgressEvent = {
      eventId: this.generateId(),
      status: PerformanceEventStatus.InProgress,
      authority: this.authority,
      libraryName: this.libraryName,
      libraryVersion: this.libraryVersion,
      clientId: this.clientId,
      name: measureName,
      startTimeMs: Date.now(),
      correlationId: eventCorrelationId,
      appName: this.applicationTelemetry?.appName,
      appVersion: this.applicationTelemetry?.appVersion
    };
    this.cacheEventByCorrelationId(inProgressEvent);
    startContext(inProgressEvent, this.abbreviations, this.eventStack.get(eventCorrelationId));
    return {
      end: (event, error) => {
        return this.endMeasurement(__spreadValues(__spreadValues({}, inProgressEvent), event), error);
      },
      discard: () => {
        return this.discardMeasurements(inProgressEvent.correlationId);
      },
      add: (fields) => {
        return this.addFields(fields, inProgressEvent.correlationId);
      },
      increment: (fields) => {
        return this.incrementFields(fields, inProgressEvent.correlationId);
      },
      event: inProgressEvent,
      measurement: new StubPerformanceMeasurement()
    };
  }
  /**
   * Stops measuring the performance for an operation. Should only be called directly by PerformanceClient classes,
   * as consumers should instead use the function returned by startMeasurement.
   * Adds a new field named as "[event name]DurationMs" for sub-measurements, completes and emits an event
   * otherwise.
   *
   * @param {PerformanceEvent} event
   * @param {unknown} error
   * @returns {(PerformanceEvent | null)}
   */
  endMeasurement(event, error) {
    const rootEvent = this.eventsByCorrelationId.get(event.correlationId);
    if (!rootEvent) {
      this.logger.trace(`PerformanceClient: Measurement not found for ${event.eventId}`, event.correlationId);
      return null;
    }
    const isRoot = event.eventId === rootEvent.eventId;
    let queueInfo = {
      totalQueueTime: 0,
      totalQueueCount: 0,
      manuallyCompletedCount: 0
    };
    event.durationMs = Math.round(event.durationMs || this.getDurationMs(event.startTimeMs));
    const context = JSON.stringify(endContext(event, this.abbreviations, this.eventStack.get(rootEvent.correlationId), error));
    if (isRoot) {
      queueInfo = this.getQueueInfo(event.correlationId);
      this.discardMeasurements(rootEvent.correlationId);
    } else {
      rootEvent.incompleteSubMeasurements?.delete(event.eventId);
    }
    this.logger.trace(`PerformanceClient: Performance measurement ended for ${event.name}: ${event.durationMs} ms`, event.correlationId);
    if (!isRoot) {
      rootEvent[event.name + "DurationMs"] = Math.floor(event.durationMs);
      return __spreadValues({}, rootEvent);
    }
    if (error) {
      addError(error, this.logger, rootEvent);
    }
    let finalEvent = __spreadValues(__spreadValues({}, rootEvent), event);
    let incompleteSubsCount = 0;
    finalEvent.incompleteSubMeasurements?.forEach((subMeasurement) => {
      this.logger.trace(`PerformanceClient: Incomplete submeasurement ${subMeasurement.name} found for ${event.name}`, finalEvent.correlationId);
      incompleteSubsCount++;
    });
    finalEvent.incompleteSubMeasurements = void 0;
    finalEvent = __spreadProps(__spreadValues({}, finalEvent), {
      queuedTimeMs: queueInfo.totalQueueTime,
      queuedCount: queueInfo.totalQueueCount,
      queuedManuallyCompletedCount: queueInfo.manuallyCompletedCount,
      status: PerformanceEventStatus.Completed,
      incompleteSubsCount,
      context
    });
    this.truncateIntegralFields(finalEvent);
    this.emitEvents([finalEvent], event.correlationId);
    return finalEvent;
  }
  /**
   * Saves extra information to be emitted when the measurements are flushed
   * @param fields
   * @param correlationId
   */
  addFields(fields, correlationId) {
    this.logger.trace("PerformanceClient: Updating static fields");
    const event = this.eventsByCorrelationId.get(correlationId);
    if (event) {
      this.eventsByCorrelationId.set(correlationId, __spreadValues(__spreadValues({}, event), fields));
    } else {
      this.logger.trace("PerformanceClient: Event not found for", correlationId);
    }
  }
  /**
   * Increment counters to be emitted when the measurements are flushed
   * @param fields {string[]}
   * @param correlationId {string} correlation identifier
   */
  incrementFields(fields, correlationId) {
    this.logger.trace("PerformanceClient: Updating counters");
    const event = this.eventsByCorrelationId.get(correlationId);
    if (event) {
      for (const counter in fields) {
        if (!event.hasOwnProperty(counter)) {
          event[counter] = 0;
        } else if (isNaN(Number(event[counter]))) {
          return;
        }
        event[counter] += fields[counter];
      }
    } else {
      this.logger.trace("PerformanceClient: Event not found for", correlationId);
    }
  }
  /**
   * Upserts event into event cache.
   * First key is the correlation id, second key is the event id.
   * Allows for events to be grouped by correlation id,
   * and to easily allow for properties on them to be updated.
   *
   * @private
   * @param {PerformanceEvent} event
   */
  cacheEventByCorrelationId(event) {
    const rootEvent = this.eventsByCorrelationId.get(event.correlationId);
    if (rootEvent) {
      this.logger.trace(`PerformanceClient: Performance measurement for ${event.name} added/updated`, event.correlationId);
      rootEvent.incompleteSubMeasurements = rootEvent.incompleteSubMeasurements || /* @__PURE__ */ new Map();
      rootEvent.incompleteSubMeasurements.set(event.eventId, {
        name: event.name,
        startTimeMs: event.startTimeMs
      });
    } else {
      this.logger.trace(`PerformanceClient: Performance measurement for ${event.name} started`, event.correlationId);
      this.eventsByCorrelationId.set(event.correlationId, __spreadValues({}, event));
      this.eventStack.set(event.correlationId, []);
    }
  }
  getQueueInfo(correlationId) {
    const queueMeasurementForCorrelationId = this.queueMeasurements.get(correlationId);
    if (!queueMeasurementForCorrelationId) {
      this.logger.trace(`PerformanceClient: no queue measurements found for for correlationId: ${correlationId}`);
    }
    let totalQueueTime = 0;
    let totalQueueCount = 0;
    let manuallyCompletedCount = 0;
    queueMeasurementForCorrelationId?.forEach((measurement) => {
      totalQueueTime += measurement.queueTime;
      totalQueueCount++;
      manuallyCompletedCount += measurement.manuallyCompleted ? 1 : 0;
    });
    return {
      totalQueueTime,
      totalQueueCount,
      manuallyCompletedCount
    };
  }
  /**
   * Removes measurements and aux data for a given correlation id.
   *
   * @param {string} correlationId
   */
  discardMeasurements(correlationId) {
    this.logger.trace("PerformanceClient: Performance measurements discarded", correlationId);
    this.eventsByCorrelationId.delete(correlationId);
    this.logger.trace("PerformanceClient: QueueMeasurements discarded", correlationId);
    this.queueMeasurements.delete(correlationId);
    this.logger.trace("PerformanceClient: Pre-queue times discarded", correlationId);
    this.preQueueTimeByCorrelationId.delete(correlationId);
    this.logger.trace("PerformanceClient: Event stack discarded", correlationId);
    this.eventStack.delete(correlationId);
  }
  /**
   * Registers a callback function to receive performance events.
   *
   * @param {PerformanceCallbackFunction} callback
   * @returns {string}
   */
  addPerformanceCallback(callback) {
    for (const [id, cb] of this.callbacks) {
      if (cb.toString() === callback.toString()) {
        this.logger.warning(`PerformanceClient: Performance callback is already registered with id: ${id}`);
        return id;
      }
    }
    const callbackId = this.generateId();
    this.callbacks.set(callbackId, callback);
    this.logger.verbose(`PerformanceClient: Performance callback registered with id: ${callbackId}`);
    return callbackId;
  }
  /**
   * Removes a callback registered with addPerformanceCallback.
   *
   * @param {string} callbackId
   * @returns {boolean}
   */
  removePerformanceCallback(callbackId) {
    const result = this.callbacks.delete(callbackId);
    if (result) {
      this.logger.verbose(`PerformanceClient: Performance callback ${callbackId} removed.`);
    } else {
      this.logger.verbose(`PerformanceClient: Performance callback ${callbackId} not removed.`);
    }
    return result;
  }
  /**
   * Emits events to all registered callbacks.
   *
   * @param {PerformanceEvent[]} events
   * @param {?string} [correlationId]
   */
  emitEvents(events, correlationId) {
    this.logger.verbose("PerformanceClient: Emitting performance events", correlationId);
    this.callbacks.forEach((callback, callbackId) => {
      this.logger.trace(`PerformanceClient: Emitting event to callback ${callbackId}`, correlationId);
      callback.apply(null, [events]);
    });
  }
  /**
   * Enforce truncation of integral fields in performance event.
   * @param {PerformanceEvent} event performance event to update.
   */
  truncateIntegralFields(event) {
    this.intFields.forEach((key) => {
      if (key in event && typeof event[key] === "number") {
        event[key] = Math.floor(event[key]);
      }
    });
  }
  /**
   * Returns event duration in milliseconds
   * @param startTimeMs {number}
   * @returns {number}
   */
  getDurationMs(startTimeMs) {
    const durationMs = Date.now() - startTimeMs;
    return durationMs < 0 ? durationMs : 0;
  }
};

// node_modules/@azure/msal-browser/dist/error/BrowserAuthErrorCodes.mjs
var BrowserAuthErrorCodes_exports = {};
__export(BrowserAuthErrorCodes_exports, {
  authCodeOrNativeAccountIdRequired: () => authCodeOrNativeAccountIdRequired,
  authCodeRequired: () => authCodeRequired,
  authRequestNotSetError: () => authRequestNotSetError,
  blockIframeReload: () => blockIframeReload,
  blockNestedPopups: () => blockNestedPopups,
  cryptoKeyNotFound: () => cryptoKeyNotFound,
  cryptoNonExistent: () => cryptoNonExistent,
  databaseNotOpen: () => databaseNotOpen,
  databaseUnavailable: () => databaseUnavailable,
  emptyNavigateUri: () => emptyNavigateUri,
  emptyWindowError: () => emptyWindowError,
  failedToParseResponse: () => failedToParseResponse,
  getRequestFailed: () => getRequestFailed,
  hashDoesNotContainKnownProperties: () => hashDoesNotContainKnownProperties,
  hashEmptyError: () => hashEmptyError,
  iframeClosedPrematurely: () => iframeClosedPrematurely,
  interactionInProgress: () => interactionInProgress,
  invalidBase64String: () => invalidBase64String,
  invalidCacheType: () => invalidCacheType,
  monitorPopupTimeout: () => monitorPopupTimeout,
  monitorWindowTimeout: () => monitorWindowTimeout,
  nativeConnectionNotEstablished: () => nativeConnectionNotEstablished,
  nativeExtensionNotInstalled: () => nativeExtensionNotInstalled,
  nativeHandshakeTimeout: () => nativeHandshakeTimeout,
  nativePromptNotSupported: () => nativePromptNotSupported,
  noAccountError: () => noAccountError,
  noCachedAuthorityError: () => noCachedAuthorityError,
  noNetworkConnectivity: () => noNetworkConnectivity2,
  noStateInHash: () => noStateInHash,
  noTokenRequestCacheError: () => noTokenRequestCacheError,
  nonBrowserEnvironment: () => nonBrowserEnvironment,
  pkceNotCreated: () => pkceNotCreated,
  popupWindowError: () => popupWindowError,
  postRequestFailed: () => postRequestFailed2,
  redirectInIframe: () => redirectInIframe,
  silentLogoutUnsupported: () => silentLogoutUnsupported,
  silentPromptValueError: () => silentPromptValueError,
  spaCodeAndNativeAccountIdPresent: () => spaCodeAndNativeAccountIdPresent,
  stateInteractionTypeMismatch: () => stateInteractionTypeMismatch,
  unableToAcquireTokenFromNativePlatform: () => unableToAcquireTokenFromNativePlatform,
  unableToLoadToken: () => unableToLoadToken,
  unableToParseState: () => unableToParseState,
  unableToParseTokenRequestCacheError: () => unableToParseTokenRequestCacheError,
  uninitializedPublicClientApplication: () => uninitializedPublicClientApplication,
  userCancelled: () => userCancelled
});
var pkceNotCreated = "pkce_not_created";
var cryptoNonExistent = "crypto_nonexistent";
var emptyNavigateUri = "empty_navigate_uri";
var hashEmptyError = "hash_empty_error";
var noStateInHash = "no_state_in_hash";
var hashDoesNotContainKnownProperties = "hash_does_not_contain_known_properties";
var unableToParseState = "unable_to_parse_state";
var stateInteractionTypeMismatch = "state_interaction_type_mismatch";
var interactionInProgress = "interaction_in_progress";
var popupWindowError = "popup_window_error";
var emptyWindowError = "empty_window_error";
var userCancelled = "user_cancelled";
var monitorPopupTimeout = "monitor_popup_timeout";
var monitorWindowTimeout = "monitor_window_timeout";
var redirectInIframe = "redirect_in_iframe";
var blockIframeReload = "block_iframe_reload";
var blockNestedPopups = "block_nested_popups";
var iframeClosedPrematurely = "iframe_closed_prematurely";
var silentLogoutUnsupported = "silent_logout_unsupported";
var noAccountError = "no_account_error";
var silentPromptValueError = "silent_prompt_value_error";
var noTokenRequestCacheError = "no_token_request_cache_error";
var unableToParseTokenRequestCacheError = "unable_to_parse_token_request_cache_error";
var noCachedAuthorityError = "no_cached_authority_error";
var authRequestNotSetError = "auth_request_not_set_error";
var invalidCacheType = "invalid_cache_type";
var nonBrowserEnvironment = "non_browser_environment";
var databaseNotOpen = "database_not_open";
var noNetworkConnectivity2 = "no_network_connectivity";
var postRequestFailed2 = "post_request_failed";
var getRequestFailed = "get_request_failed";
var failedToParseResponse = "failed_to_parse_response";
var unableToLoadToken = "unable_to_load_token";
var cryptoKeyNotFound = "crypto_key_not_found";
var authCodeRequired = "auth_code_required";
var authCodeOrNativeAccountIdRequired = "auth_code_or_nativeAccountId_required";
var spaCodeAndNativeAccountIdPresent = "spa_code_and_nativeAccountId_present";
var databaseUnavailable = "database_unavailable";
var unableToAcquireTokenFromNativePlatform = "unable_to_acquire_token_from_native_platform";
var nativeHandshakeTimeout = "native_handshake_timeout";
var nativeExtensionNotInstalled = "native_extension_not_installed";
var nativeConnectionNotEstablished = "native_connection_not_established";
var uninitializedPublicClientApplication = "uninitialized_public_client_application";
var nativePromptNotSupported = "native_prompt_not_supported";
var invalidBase64String = "invalid_base64_string";

// node_modules/@azure/msal-browser/dist/error/BrowserAuthError.mjs
var ErrorLink = "For more visit: aka.ms/msaljs/browser-errors";
var BrowserAuthErrorMessages = {
  [pkceNotCreated]: "The PKCE code challenge and verifier could not be generated.",
  [cryptoNonExistent]: "The crypto object or function is not available.",
  [emptyNavigateUri]: "Navigation URI is empty. Please check stack trace for more info.",
  [hashEmptyError]: `Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. ${ErrorLink}`,
  [noStateInHash]: "Hash does not contain state. Please verify that the request originated from msal.",
  [hashDoesNotContainKnownProperties]: `Hash does not contain known properites. Please verify that your redirectUri is not changing the hash.  ${ErrorLink}`,
  [unableToParseState]: "Unable to parse state. Please verify that the request originated from msal.",
  [stateInteractionTypeMismatch]: "Hash contains state but the interaction type does not match the caller.",
  [interactionInProgress]: `Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.   ${ErrorLink}`,
  [popupWindowError]: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser.",
  [emptyWindowError]: "window.open returned null or undefined window object.",
  [userCancelled]: "User cancelled the flow.",
  [monitorPopupTimeout]: `Token acquisition in popup failed due to timeout.  ${ErrorLink}`,
  [monitorWindowTimeout]: `Token acquisition in iframe failed due to timeout.  ${ErrorLink}`,
  [redirectInIframe]: "Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs.",
  [blockIframeReload]: `Request was blocked inside an iframe because MSAL detected an authentication response.  ${ErrorLink}`,
  [blockNestedPopups]: "Request was blocked inside a popup because MSAL detected it was running in a popup.",
  [iframeClosedPrematurely]: "The iframe being monitored was closed prematurely.",
  [silentLogoutUnsupported]: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead.",
  [noAccountError]: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request.",
  [silentPromptValueError]: "The value given for the prompt value is not valid for silent requests - must be set to 'none' or 'no_session'.",
  [noTokenRequestCacheError]: "No token request found in cache.",
  [unableToParseTokenRequestCacheError]: "The cached token request could not be parsed.",
  [noCachedAuthorityError]: "No cached authority found.",
  [authRequestNotSetError]: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler",
  [invalidCacheType]: "Invalid cache type",
  [nonBrowserEnvironment]: "Login and token requests are not supported in non-browser environments.",
  [databaseNotOpen]: "Database is not open!",
  [noNetworkConnectivity2]: "No network connectivity. Check your internet connection.",
  [postRequestFailed2]: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'",
  [getRequestFailed]: "Network request failed. Please check the network trace to determine root cause.",
  [failedToParseResponse]: "Failed to parse network response. Check network trace.",
  [unableToLoadToken]: "Error loading token to cache.",
  [cryptoKeyNotFound]: "Cryptographic Key or Keypair not found in browser storage.",
  [authCodeRequired]: "An authorization code must be provided (as the `code` property on the request) to this flow.",
  [authCodeOrNativeAccountIdRequired]: "An authorization code or nativeAccountId must be provided to this flow.",
  [spaCodeAndNativeAccountIdPresent]: "Request cannot contain both spa code and native account id.",
  [databaseUnavailable]: "IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts.",
  [unableToAcquireTokenFromNativePlatform]: `Unable to acquire token from native platform.  ${ErrorLink}`,
  [nativeHandshakeTimeout]: "Timed out while attempting to establish connection to browser extension",
  [nativeExtensionNotInstalled]: "Native extension is not installed. If you think this is a mistake call the initialize function.",
  [nativeConnectionNotEstablished]: `Connection to native platform has not been established. Please install a compatible browser extension and run initialize().  ${ErrorLink}`,
  [uninitializedPublicClientApplication]: `You must call and await the initialize function before attempting to call any other MSAL API.  ${ErrorLink}`,
  [nativePromptNotSupported]: "The provided prompt is not supported by the native platform. This request should be routed to the web based flow.",
  [invalidBase64String]: "Invalid base64 encoded string."
};
var BrowserAuthErrorMessage = {
  pkceNotGenerated: {
    code: pkceNotCreated,
    desc: BrowserAuthErrorMessages[pkceNotCreated]
  },
  cryptoDoesNotExist: {
    code: cryptoNonExistent,
    desc: BrowserAuthErrorMessages[cryptoNonExistent]
  },
  emptyNavigateUriError: {
    code: emptyNavigateUri,
    desc: BrowserAuthErrorMessages[emptyNavigateUri]
  },
  hashEmptyError: {
    code: hashEmptyError,
    desc: BrowserAuthErrorMessages[hashEmptyError]
  },
  hashDoesNotContainStateError: {
    code: noStateInHash,
    desc: BrowserAuthErrorMessages[noStateInHash]
  },
  hashDoesNotContainKnownPropertiesError: {
    code: hashDoesNotContainKnownProperties,
    desc: BrowserAuthErrorMessages[hashDoesNotContainKnownProperties]
  },
  unableToParseStateError: {
    code: unableToParseState,
    desc: BrowserAuthErrorMessages[unableToParseState]
  },
  stateInteractionTypeMismatchError: {
    code: stateInteractionTypeMismatch,
    desc: BrowserAuthErrorMessages[stateInteractionTypeMismatch]
  },
  interactionInProgress: {
    code: interactionInProgress,
    desc: BrowserAuthErrorMessages[interactionInProgress]
  },
  popupWindowError: {
    code: popupWindowError,
    desc: BrowserAuthErrorMessages[popupWindowError]
  },
  emptyWindowError: {
    code: emptyWindowError,
    desc: BrowserAuthErrorMessages[emptyWindowError]
  },
  userCancelledError: {
    code: userCancelled,
    desc: BrowserAuthErrorMessages[userCancelled]
  },
  monitorPopupTimeoutError: {
    code: monitorPopupTimeout,
    desc: BrowserAuthErrorMessages[monitorPopupTimeout]
  },
  monitorIframeTimeoutError: {
    code: monitorWindowTimeout,
    desc: BrowserAuthErrorMessages[monitorWindowTimeout]
  },
  redirectInIframeError: {
    code: redirectInIframe,
    desc: BrowserAuthErrorMessages[redirectInIframe]
  },
  blockTokenRequestsInHiddenIframeError: {
    code: blockIframeReload,
    desc: BrowserAuthErrorMessages[blockIframeReload]
  },
  blockAcquireTokenInPopupsError: {
    code: blockNestedPopups,
    desc: BrowserAuthErrorMessages[blockNestedPopups]
  },
  iframeClosedPrematurelyError: {
    code: iframeClosedPrematurely,
    desc: BrowserAuthErrorMessages[iframeClosedPrematurely]
  },
  silentLogoutUnsupportedError: {
    code: silentLogoutUnsupported,
    desc: BrowserAuthErrorMessages[silentLogoutUnsupported]
  },
  noAccountError: {
    code: noAccountError,
    desc: BrowserAuthErrorMessages[noAccountError]
  },
  silentPromptValueError: {
    code: silentPromptValueError,
    desc: BrowserAuthErrorMessages[silentPromptValueError]
  },
  noTokenRequestCacheError: {
    code: noTokenRequestCacheError,
    desc: BrowserAuthErrorMessages[noTokenRequestCacheError]
  },
  unableToParseTokenRequestCacheError: {
    code: unableToParseTokenRequestCacheError,
    desc: BrowserAuthErrorMessages[unableToParseTokenRequestCacheError]
  },
  noCachedAuthorityError: {
    code: noCachedAuthorityError,
    desc: BrowserAuthErrorMessages[noCachedAuthorityError]
  },
  authRequestNotSet: {
    code: authRequestNotSetError,
    desc: BrowserAuthErrorMessages[authRequestNotSetError]
  },
  invalidCacheType: {
    code: invalidCacheType,
    desc: BrowserAuthErrorMessages[invalidCacheType]
  },
  notInBrowserEnvironment: {
    code: nonBrowserEnvironment,
    desc: BrowserAuthErrorMessages[nonBrowserEnvironment]
  },
  databaseNotOpen: {
    code: databaseNotOpen,
    desc: BrowserAuthErrorMessages[databaseNotOpen]
  },
  noNetworkConnectivity: {
    code: noNetworkConnectivity2,
    desc: BrowserAuthErrorMessages[noNetworkConnectivity2]
  },
  postRequestFailed: {
    code: postRequestFailed2,
    desc: BrowserAuthErrorMessages[postRequestFailed2]
  },
  getRequestFailed: {
    code: getRequestFailed,
    desc: BrowserAuthErrorMessages[getRequestFailed]
  },
  failedToParseNetworkResponse: {
    code: failedToParseResponse,
    desc: BrowserAuthErrorMessages[failedToParseResponse]
  },
  unableToLoadTokenError: {
    code: unableToLoadToken,
    desc: BrowserAuthErrorMessages[unableToLoadToken]
  },
  signingKeyNotFoundInStorage: {
    code: cryptoKeyNotFound,
    desc: BrowserAuthErrorMessages[cryptoKeyNotFound]
  },
  authCodeRequired: {
    code: authCodeRequired,
    desc: BrowserAuthErrorMessages[authCodeRequired]
  },
  authCodeOrNativeAccountRequired: {
    code: authCodeOrNativeAccountIdRequired,
    desc: BrowserAuthErrorMessages[authCodeOrNativeAccountIdRequired]
  },
  spaCodeAndNativeAccountPresent: {
    code: spaCodeAndNativeAccountIdPresent,
    desc: BrowserAuthErrorMessages[spaCodeAndNativeAccountIdPresent]
  },
  databaseUnavailable: {
    code: databaseUnavailable,
    desc: BrowserAuthErrorMessages[databaseUnavailable]
  },
  unableToAcquireTokenFromNativePlatform: {
    code: unableToAcquireTokenFromNativePlatform,
    desc: BrowserAuthErrorMessages[unableToAcquireTokenFromNativePlatform]
  },
  nativeHandshakeTimeout: {
    code: nativeHandshakeTimeout,
    desc: BrowserAuthErrorMessages[nativeHandshakeTimeout]
  },
  nativeExtensionNotInstalled: {
    code: nativeExtensionNotInstalled,
    desc: BrowserAuthErrorMessages[nativeExtensionNotInstalled]
  },
  nativeConnectionNotEstablished: {
    code: nativeConnectionNotEstablished,
    desc: BrowserAuthErrorMessages[nativeConnectionNotEstablished]
  },
  uninitializedPublicClientApplication: {
    code: uninitializedPublicClientApplication,
    desc: BrowserAuthErrorMessages[uninitializedPublicClientApplication]
  },
  nativePromptNotSupported: {
    code: nativePromptNotSupported,
    desc: BrowserAuthErrorMessages[nativePromptNotSupported]
  },
  invalidBase64StringError: {
    code: invalidBase64String,
    desc: BrowserAuthErrorMessages[invalidBase64String]
  }
};
var BrowserAuthError = class _BrowserAuthError extends AuthError {
  constructor(errorCode) {
    super(errorCode, BrowserAuthErrorMessages[errorCode]);
    Object.setPrototypeOf(this, _BrowserAuthError.prototype);
    this.name = "BrowserAuthError";
  }
};
function createBrowserAuthError(errorCode) {
  return new BrowserAuthError(errorCode);
}

// node_modules/@azure/msal-browser/dist/utils/BrowserConstants.mjs
var BrowserConstants = {
  /**
   * Interaction in progress cache value
   */
  INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress",
  /**
   * Invalid grant error code
   */
  INVALID_GRANT_ERROR: "invalid_grant",
  /**
   * Default popup window width
   */
  POPUP_WIDTH: 483,
  /**
   * Default popup window height
   */
  POPUP_HEIGHT: 600,
  /**
   * Name of the popup window starts with
   */
  POPUP_NAME_PREFIX: "msal",
  /**
   * Default popup monitor poll interval in milliseconds
   */
  DEFAULT_POLL_INTERVAL_MS: 30,
  /**
   * Msal-browser SKU
   */
  MSAL_SKU: "msal.js.browser"
};
var NativeConstants = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
};
var NativeExtensionMethod = {
  HandshakeRequest: "Handshake",
  HandshakeResponse: "HandshakeResponse",
  GetToken: "GetToken",
  Response: "Response"
};
var BrowserCacheLocation = {
  LocalStorage: "localStorage",
  SessionStorage: "sessionStorage",
  MemoryStorage: "memoryStorage"
};
var HTTP_REQUEST_TYPE = {
  GET: "GET",
  POST: "POST"
};
var TemporaryCacheKeys = {
  AUTHORITY: "authority",
  ACQUIRE_TOKEN_ACCOUNT: "acquireToken.account",
  SESSION_STATE: "session.state",
  REQUEST_STATE: "request.state",
  NONCE_IDTOKEN: "nonce.id_token",
  ORIGIN_URI: "request.origin",
  RENEW_STATUS: "token.renew.status",
  URL_HASH: "urlHash",
  REQUEST_PARAMS: "request.params",
  SCOPES: "scopes",
  INTERACTION_STATUS_KEY: "interaction.status",
  CCS_CREDENTIAL: "ccs.credential",
  CORRELATION_ID: "request.correlationId",
  NATIVE_REQUEST: "request.native",
  REDIRECT_CONTEXT: "request.redirect.context"
};
var StaticCacheKeys = {
  ACCOUNT_KEYS: "msal.account.keys",
  TOKEN_KEYS: "msal.token.keys"
};
var InMemoryCacheKeys = {
  WRAPPER_SKU: "wrapper.sku",
  WRAPPER_VER: "wrapper.version"
};
var ApiId = {
  acquireTokenRedirect: 861,
  acquireTokenPopup: 862,
  ssoSilent: 863,
  acquireTokenSilent_authCode: 864,
  handleRedirectPromise: 865,
  acquireTokenByCode: 866,
  acquireTokenSilent_silentFlow: 61,
  logout: 961,
  logoutPopup: 962
};
var InteractionType;
(function(InteractionType2) {
  InteractionType2["Redirect"] = "redirect";
  InteractionType2["Popup"] = "popup";
  InteractionType2["Silent"] = "silent";
  InteractionType2["None"] = "none";
})(InteractionType || (InteractionType = {}));
var InteractionStatus = {
  /**
   * Initial status before interaction occurs
   */
  Startup: "startup",
  /**
   * Status set when all login calls occuring
   */
  Login: "login",
  /**
   * Status set when logout call occuring
   */
  Logout: "logout",
  /**
   * Status set for acquireToken calls
   */
  AcquireToken: "acquireToken",
  /**
   * Status set for ssoSilent calls
   */
  SsoSilent: "ssoSilent",
  /**
   * Status set when handleRedirect in progress
   */
  HandleRedirect: "handleRedirect",
  /**
   * Status set when interaction is complete
   */
  None: "none"
};
var DEFAULT_REQUEST = {
  scopes: OIDC_DEFAULT_SCOPES
};
var KEY_FORMAT_JWK = "jwk";
var WrapperSKU = {
  React: "@azure/msal-react",
  Angular: "@azure/msal-angular"
};
var DB_NAME = "msal.db";
var DB_VERSION = 1;
var DB_TABLE_NAME = `${DB_NAME}.keys`;
var CacheLookupPolicy = {
  /*
   * acquireTokenSilent will attempt to retrieve an access token from the cache. If the access token is expired
   * or cannot be found the refresh token will be used to acquire a new one. Finally, if the refresh token
   * is expired acquireTokenSilent will attempt to acquire new access and refresh tokens.
   */
  Default: 0,
  /*
   * acquireTokenSilent will only look for access tokens in the cache. It will not attempt to renew access or
   * refresh tokens.
   */
  AccessToken: 1,
  /*
   * acquireTokenSilent will attempt to retrieve an access token from the cache. If the access token is expired or
   * cannot be found, the refresh token will be used to acquire a new one. If the refresh token is expired, it
   * will not be renewed and acquireTokenSilent will fail.
   */
  AccessTokenAndRefreshToken: 2,
  /*
   * acquireTokenSilent will not attempt to retrieve access tokens from the cache and will instead attempt to
   * exchange the cached refresh token for a new access token. If the refresh token is expired, it will not be
   * renewed and acquireTokenSilent will fail.
   */
  RefreshToken: 3,
  /*
   * acquireTokenSilent will not look in the cache for the access token. It will go directly to network with the
   * cached refresh token. If the refresh token is expired an attempt will be made to renew it. This is equivalent to
   * setting "forceRefresh: true".
   */
  RefreshTokenAndNetwork: 4,
  /*
   * acquireTokenSilent will attempt to renew both access and refresh tokens. It will not look in the cache. This will
   * always fail if 3rd party cookies are blocked by the browser.
   */
  Skip: 5
};
var iFrameRenewalPolicies = [
  CacheLookupPolicy.Default,
  CacheLookupPolicy.Skip,
  CacheLookupPolicy.RefreshTokenAndNetwork
];
var LOG_LEVEL_CACHE_KEY = "msal.browser.log.level";
var LOG_PII_CACHE_KEY = "msal.browser.log.pii";
var BROWSER_PERF_ENABLED_KEY = "msal.browser.performance.enabled";

// node_modules/@azure/msal-browser/dist/encode/Base64Encode.mjs
function urlEncode(input) {
  return encodeURIComponent(base64Encode(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"));
}
function urlEncodeArr(inputArr) {
  return base64EncArr(inputArr).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function base64Encode(input) {
  return base64EncArr(new TextEncoder().encode(input));
}
function base64EncArr(aBytes) {
  const binString = Array.from(aBytes, (x) => String.fromCodePoint(x)).join("");
  return btoa(binString);
}

// node_modules/@azure/msal-browser/dist/crypto/BrowserCrypto.mjs
var PKCS1_V15_KEYGEN_ALG = "RSASSA-PKCS1-v1_5";
var S256_HASH_ALG = "SHA-256";
var MODULUS_LENGTH = 2048;
var PUBLIC_EXPONENT = new Uint8Array([1, 0, 1]);
var UUID_CHARS = "0123456789abcdef";
var UINT32_ARR = new Uint32Array(1);
var keygenAlgorithmOptions = {
  name: PKCS1_V15_KEYGEN_ALG,
  hash: S256_HASH_ALG,
  modulusLength: MODULUS_LENGTH,
  publicExponent: PUBLIC_EXPONENT
};
function validateCryptoAvailable(logger) {
  if ("crypto" in window) {
    logger.verbose("BrowserCrypto: modern crypto interface available");
  } else {
    logger.error("BrowserCrypto: crypto interface is unavailable");
    throw createBrowserAuthError(cryptoNonExistent);
  }
}
function sha256Digest(dataString, performanceClient, correlationId) {
  return __async(this, null, function* () {
    performanceClient?.addQueueMeasurement(PerformanceEvents.Sha256Digest, correlationId);
    const encoder = new TextEncoder();
    const data = encoder.encode(dataString);
    return window.crypto.subtle.digest(S256_HASH_ALG, data);
  });
}
function getRandomValues(dataBuffer) {
  return window.crypto.getRandomValues(dataBuffer);
}
function getRandomUint32() {
  window.crypto.getRandomValues(UINT32_ARR);
  return UINT32_ARR[0];
}
function createNewGuid() {
  const currentTimestamp = Date.now();
  const baseRand = getRandomUint32() * 1024 + (getRandomUint32() & 1023);
  const bytes = new Uint8Array(16);
  const randA = Math.trunc(baseRand / 2 ** 30);
  const randBHi = baseRand & 2 ** 30 - 1;
  const randBLo = getRandomUint32();
  bytes[0] = currentTimestamp / 2 ** 40;
  bytes[1] = currentTimestamp / 2 ** 32;
  bytes[2] = currentTimestamp / 2 ** 24;
  bytes[3] = currentTimestamp / 2 ** 16;
  bytes[4] = currentTimestamp / 2 ** 8;
  bytes[5] = currentTimestamp;
  bytes[6] = 112 | randA >>> 8;
  bytes[7] = randA;
  bytes[8] = 128 | randBHi >>> 24;
  bytes[9] = randBHi >>> 16;
  bytes[10] = randBHi >>> 8;
  bytes[11] = randBHi;
  bytes[12] = randBLo >>> 24;
  bytes[13] = randBLo >>> 16;
  bytes[14] = randBLo >>> 8;
  bytes[15] = randBLo;
  let text = "";
  for (let i = 0; i < bytes.length; i++) {
    text += UUID_CHARS.charAt(bytes[i] >>> 4);
    text += UUID_CHARS.charAt(bytes[i] & 15);
    if (i === 3 || i === 5 || i === 7 || i === 9) {
      text += "-";
    }
  }
  return text;
}
function generateKeyPair(extractable, usages) {
  return __async(this, null, function* () {
    return window.crypto.subtle.generateKey(keygenAlgorithmOptions, extractable, usages);
  });
}
function exportJwk(key) {
  return __async(this, null, function* () {
    return window.crypto.subtle.exportKey(KEY_FORMAT_JWK, key);
  });
}
function importJwk(key, extractable, usages) {
  return __async(this, null, function* () {
    return window.crypto.subtle.importKey(KEY_FORMAT_JWK, key, keygenAlgorithmOptions, extractable, usages);
  });
}
function sign(key, data) {
  return __async(this, null, function* () {
    return window.crypto.subtle.sign(keygenAlgorithmOptions, key, data);
  });
}
function hashString(plainText) {
  return __async(this, null, function* () {
    const hashBuffer = yield sha256Digest(plainText);
    const hashBytes = new Uint8Array(hashBuffer);
    return urlEncodeArr(hashBytes);
  });
}

// node_modules/@azure/msal-browser/dist/cache/MemoryStorage.mjs
var MemoryStorage = class {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  getItem(key) {
    return this.cache.get(key) || null;
  }
  setItem(key, value) {
    this.cache.set(key, value);
  }
  removeItem(key) {
    this.cache.delete(key);
  }
  getKeys() {
    const cacheKeys = [];
    this.cache.forEach((value, key) => {
      cacheKeys.push(key);
    });
    return cacheKeys;
  }
  containsKey(key) {
    return this.cache.has(key);
  }
  clear() {
    this.cache.clear();
  }
};

// node_modules/@azure/msal-browser/dist/encode/Base64Decode.mjs
function base64Decode(input) {
  return new TextDecoder().decode(base64DecToArr(input));
}
function base64DecToArr(base64String) {
  let encodedString = base64String.replace(/-/g, "+").replace(/_/g, "/");
  switch (encodedString.length % 4) {
    case 0:
      break;
    case 2:
      encodedString += "==";
      break;
    case 3:
      encodedString += "=";
      break;
    default:
      throw createBrowserAuthError(invalidBase64String);
  }
  const binString = atob(encodedString);
  return Uint8Array.from(binString, (m) => m.codePointAt(0) || 0);
}

// node_modules/@azure/msal-browser/dist/cache/DatabaseStorage.mjs
var DatabaseStorage = class {
  constructor() {
    this.dbName = DB_NAME;
    this.version = DB_VERSION;
    this.tableName = DB_TABLE_NAME;
    this.dbOpen = false;
  }
  /**
   * Opens IndexedDB instance.
   */
  open() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const openDB = window.indexedDB.open(this.dbName, this.version);
        openDB.addEventListener("upgradeneeded", (e) => {
          const event = e;
          event.target.result.createObjectStore(this.tableName);
        });
        openDB.addEventListener("success", (e) => {
          const event = e;
          this.db = event.target.result;
          this.dbOpen = true;
          resolve();
        });
        openDB.addEventListener("error", () => reject(createBrowserAuthError(databaseUnavailable)));
      });
    });
  }
  /**
   * Closes the connection to IndexedDB database when all pending transactions
   * complete.
   */
  closeConnection() {
    const db = this.db;
    if (db && this.dbOpen) {
      db.close();
      this.dbOpen = false;
    }
  }
  /**
   * Opens database if it's not already open
   */
  validateDbIsOpen() {
    return __async(this, null, function* () {
      if (!this.dbOpen) {
        return this.open();
      }
    });
  }
  /**
   * Retrieves item from IndexedDB instance.
   * @param key
   */
  getItem(key) {
    return __async(this, null, function* () {
      yield this.validateDbIsOpen();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          return reject(createBrowserAuthError(databaseNotOpen));
        }
        const transaction = this.db.transaction([this.tableName], "readonly");
        const objectStore = transaction.objectStore(this.tableName);
        const dbGet = objectStore.get(key);
        dbGet.addEventListener("success", (e) => {
          const event = e;
          this.closeConnection();
          resolve(event.target.result);
        });
        dbGet.addEventListener("error", (e) => {
          this.closeConnection();
          reject(e);
        });
      });
    });
  }
  /**
   * Adds item to IndexedDB under given key
   * @param key
   * @param payload
   */
  setItem(key, payload) {
    return __async(this, null, function* () {
      yield this.validateDbIsOpen();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          return reject(createBrowserAuthError(databaseNotOpen));
        }
        const transaction = this.db.transaction([this.tableName], "readwrite");
        const objectStore = transaction.objectStore(this.tableName);
        const dbPut = objectStore.put(payload, key);
        dbPut.addEventListener("success", () => {
          this.closeConnection();
          resolve();
        });
        dbPut.addEventListener("error", (e) => {
          this.closeConnection();
          reject(e);
        });
      });
    });
  }
  /**
   * Removes item from IndexedDB under given key
   * @param key
   */
  removeItem(key) {
    return __async(this, null, function* () {
      yield this.validateDbIsOpen();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          return reject(createBrowserAuthError(databaseNotOpen));
        }
        const transaction = this.db.transaction([this.tableName], "readwrite");
        const objectStore = transaction.objectStore(this.tableName);
        const dbDelete = objectStore.delete(key);
        dbDelete.addEventListener("success", () => {
          this.closeConnection();
          resolve();
        });
        dbDelete.addEventListener("error", (e) => {
          this.closeConnection();
          reject(e);
        });
      });
    });
  }
  /**
   * Get all the keys from the storage object as an iterable array of strings.
   */
  getKeys() {
    return __async(this, null, function* () {
      yield this.validateDbIsOpen();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          return reject(createBrowserAuthError(databaseNotOpen));
        }
        const transaction = this.db.transaction([this.tableName], "readonly");
        const objectStore = transaction.objectStore(this.tableName);
        const dbGetKeys = objectStore.getAllKeys();
        dbGetKeys.addEventListener("success", (e) => {
          const event = e;
          this.closeConnection();
          resolve(event.target.result);
        });
        dbGetKeys.addEventListener("error", (e) => {
          this.closeConnection();
          reject(e);
        });
      });
    });
  }
  /**
   *
   * Checks whether there is an object under the search key in the object store
   */
  containsKey(key) {
    return __async(this, null, function* () {
      yield this.validateDbIsOpen();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          return reject(createBrowserAuthError(databaseNotOpen));
        }
        const transaction = this.db.transaction([this.tableName], "readonly");
        const objectStore = transaction.objectStore(this.tableName);
        const dbContainsKey = objectStore.count(key);
        dbContainsKey.addEventListener("success", (e) => {
          const event = e;
          this.closeConnection();
          resolve(event.target.result === 1);
        });
        dbContainsKey.addEventListener("error", (e) => {
          this.closeConnection();
          reject(e);
        });
      });
    });
  }
  /**
   * Deletes the MSAL database. The database is deleted rather than cleared to make it possible
   * for client applications to downgrade to a previous MSAL version without worrying about forward compatibility issues
   * with IndexedDB database versions.
   */
  deleteDatabase() {
    return __async(this, null, function* () {
      if (this.db && this.dbOpen) {
        this.closeConnection();
      }
      return new Promise((resolve, reject) => {
        const deleteDbRequest = window.indexedDB.deleteDatabase(DB_NAME);
        const id = setTimeout(() => reject(false), 200);
        deleteDbRequest.addEventListener("success", () => {
          clearTimeout(id);
          return resolve(true);
        });
        deleteDbRequest.addEventListener("blocked", () => {
          clearTimeout(id);
          return resolve(true);
        });
        deleteDbRequest.addEventListener("error", () => {
          clearTimeout(id);
          return reject(false);
        });
      });
    });
  }
};

// node_modules/@azure/msal-browser/dist/cache/AsyncMemoryStorage.mjs
var AsyncMemoryStorage = class {
  constructor(logger) {
    this.inMemoryCache = new MemoryStorage();
    this.indexedDBCache = new DatabaseStorage();
    this.logger = logger;
  }
  handleDatabaseAccessError(error) {
    if (error instanceof BrowserAuthError && error.errorCode === databaseUnavailable) {
      this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
    } else {
      throw error;
    }
  }
  /**
   * Get the item matching the given key. Tries in-memory cache first, then in the asynchronous
   * storage object if item isn't found in-memory.
   * @param key
   */
  getItem(key) {
    return __async(this, null, function* () {
      const item = this.inMemoryCache.getItem(key);
      if (!item) {
        try {
          this.logger.verbose("Queried item not found in in-memory cache, now querying persistent storage.");
          return yield this.indexedDBCache.getItem(key);
        } catch (e) {
          this.handleDatabaseAccessError(e);
        }
      }
      return item;
    });
  }
  /**
   * Sets the item in the in-memory cache and then tries to set it in the asynchronous
   * storage object with the given key.
   * @param key
   * @param value
   */
  setItem(key, value) {
    return __async(this, null, function* () {
      this.inMemoryCache.setItem(key, value);
      try {
        yield this.indexedDBCache.setItem(key, value);
      } catch (e) {
        this.handleDatabaseAccessError(e);
      }
    });
  }
  /**
   * Removes the item matching the key from the in-memory cache, then tries to remove it from the asynchronous storage object.
   * @param key
   */
  removeItem(key) {
    return __async(this, null, function* () {
      this.inMemoryCache.removeItem(key);
      try {
        yield this.indexedDBCache.removeItem(key);
      } catch (e) {
        this.handleDatabaseAccessError(e);
      }
    });
  }
  /**
   * Get all the keys from the in-memory cache as an iterable array of strings. If no keys are found, query the keys in the
   * asynchronous storage object.
   */
  getKeys() {
    return __async(this, null, function* () {
      const cacheKeys = this.inMemoryCache.getKeys();
      if (cacheKeys.length === 0) {
        try {
          this.logger.verbose("In-memory cache is empty, now querying persistent storage.");
          return yield this.indexedDBCache.getKeys();
        } catch (e) {
          this.handleDatabaseAccessError(e);
        }
      }
      return cacheKeys;
    });
  }
  /**
   * Returns true or false if the given key is present in the cache.
   * @param key
   */
  containsKey(key) {
    return __async(this, null, function* () {
      const containsKey = this.inMemoryCache.containsKey(key);
      if (!containsKey) {
        try {
          this.logger.verbose("Key not found in in-memory cache, now querying persistent storage.");
          return yield this.indexedDBCache.containsKey(key);
        } catch (e) {
          this.handleDatabaseAccessError(e);
        }
      }
      return containsKey;
    });
  }
  /**
   * Clears in-memory Map
   */
  clearInMemory() {
    this.logger.verbose(`Deleting in-memory keystore`);
    this.inMemoryCache.clear();
    this.logger.verbose(`In-memory keystore deleted`);
  }
  /**
   * Tries to delete the IndexedDB database
   * @returns
   */
  clearPersistent() {
    return __async(this, null, function* () {
      try {
        this.logger.verbose("Deleting persistent keystore");
        const dbDeleted = yield this.indexedDBCache.deleteDatabase();
        if (dbDeleted) {
          this.logger.verbose("Persistent keystore deleted");
        }
        return dbDeleted;
      } catch (e) {
        this.handleDatabaseAccessError(e);
        return false;
      }
    });
  }
};

// node_modules/@azure/msal-browser/dist/crypto/CryptoOps.mjs
var CryptoOps = class _CryptoOps {
  constructor(logger, performanceClient) {
    this.logger = logger;
    validateCryptoAvailable(logger);
    this.cache = new AsyncMemoryStorage(this.logger);
    this.performanceClient = performanceClient;
  }
  /**
   * Creates a new random GUID - used to populate state and nonce.
   * @returns string (GUID)
   */
  createNewGuid() {
    return createNewGuid();
  }
  /**
   * Encodes input string to base64.
   * @param input
   */
  base64Encode(input) {
    return base64Encode(input);
  }
  /**
   * Decodes input string from base64.
   * @param input
   */
  base64Decode(input) {
    return base64Decode(input);
  }
  /**
   * Generates a keypair, stores it and returns a thumbprint
   * @param request
   */
  getPublicKeyThumbprint(request) {
    return __async(this, null, function* () {
      const publicKeyThumbMeasurement = this.performanceClient?.startMeasurement(PerformanceEvents.CryptoOptsGetPublicKeyThumbprint, request.correlationId);
      const keyPair = yield generateKeyPair(_CryptoOps.EXTRACTABLE, _CryptoOps.POP_KEY_USAGES);
      const publicKeyJwk = yield exportJwk(keyPair.publicKey);
      const pubKeyThumprintObj = {
        e: publicKeyJwk.e,
        kty: publicKeyJwk.kty,
        n: publicKeyJwk.n
      };
      const publicJwkString = getSortedObjectString(pubKeyThumprintObj);
      const publicJwkHash = yield this.hashString(publicJwkString);
      const privateKeyJwk = yield exportJwk(keyPair.privateKey);
      const unextractablePrivateKey = yield importJwk(privateKeyJwk, false, ["sign"]);
      yield this.cache.setItem(publicJwkHash, {
        privateKey: unextractablePrivateKey,
        publicKey: keyPair.publicKey,
        requestMethod: request.resourceRequestMethod,
        requestUri: request.resourceRequestUri
      });
      if (publicKeyThumbMeasurement) {
        publicKeyThumbMeasurement.end({
          success: true
        });
      }
      return publicJwkHash;
    });
  }
  /**
   * Removes cryptographic keypair from key store matching the keyId passed in
   * @param kid
   */
  removeTokenBindingKey(kid) {
    return __async(this, null, function* () {
      yield this.cache.removeItem(kid);
      const keyFound = yield this.cache.containsKey(kid);
      return !keyFound;
    });
  }
  /**
   * Removes all cryptographic keys from IndexedDB storage
   */
  clearKeystore() {
    return __async(this, null, function* () {
      this.cache.clearInMemory();
      try {
        yield this.cache.clearPersistent();
        return true;
      } catch (e) {
        if (e instanceof Error) {
          this.logger.error(`Clearing keystore failed with error: ${e.message}`);
        } else {
          this.logger.error("Clearing keystore failed with unknown error");
        }
        return false;
      }
    });
  }
  /**
   * Signs the given object as a jwt payload with private key retrieved by given kid.
   * @param payload
   * @param kid
   */
  signJwt(payload, kid, shrOptions, correlationId) {
    return __async(this, null, function* () {
      const signJwtMeasurement = this.performanceClient?.startMeasurement(PerformanceEvents.CryptoOptsSignJwt, correlationId);
      const cachedKeyPair = yield this.cache.getItem(kid);
      if (!cachedKeyPair) {
        throw createBrowserAuthError(cryptoKeyNotFound);
      }
      const publicKeyJwk = yield exportJwk(cachedKeyPair.publicKey);
      const publicKeyJwkString = getSortedObjectString(publicKeyJwk);
      const encodedKeyIdThumbprint = urlEncode(JSON.stringify({ kid }));
      const shrHeader = JoseHeader.getShrHeaderString(__spreadProps(__spreadValues({}, shrOptions?.header), {
        alg: publicKeyJwk.alg,
        kid: encodedKeyIdThumbprint
      }));
      const encodedShrHeader = urlEncode(shrHeader);
      payload.cnf = {
        jwk: JSON.parse(publicKeyJwkString)
      };
      const encodedPayload = urlEncode(JSON.stringify(payload));
      const tokenString = `${encodedShrHeader}.${encodedPayload}`;
      const encoder = new TextEncoder();
      const tokenBuffer = encoder.encode(tokenString);
      const signatureBuffer = yield sign(cachedKeyPair.privateKey, tokenBuffer);
      const encodedSignature = urlEncodeArr(new Uint8Array(signatureBuffer));
      const signedJwt = `${tokenString}.${encodedSignature}`;
      if (signJwtMeasurement) {
        signJwtMeasurement.end({
          success: true
        });
      }
      return signedJwt;
    });
  }
  /**
   * Returns the SHA-256 hash of an input string
   * @param plainText
   */
  hashString(plainText) {
    return __async(this, null, function* () {
      return hashString(plainText);
    });
  }
};
CryptoOps.POP_KEY_USAGES = ["sign", "verify"];
CryptoOps.EXTRACTABLE = true;
function getSortedObjectString(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}

// node_modules/@azure/msal-browser/dist/event/EventType.mjs
var EventType = {
  INITIALIZE_START: "msal:initializeStart",
  INITIALIZE_END: "msal:initializeEnd",
  ACCOUNT_ADDED: "msal:accountAdded",
  ACCOUNT_REMOVED: "msal:accountRemoved",
  ACTIVE_ACCOUNT_CHANGED: "msal:activeAccountChanged",
  LOGIN_START: "msal:loginStart",
  LOGIN_SUCCESS: "msal:loginSuccess",
  LOGIN_FAILURE: "msal:loginFailure",
  ACQUIRE_TOKEN_START: "msal:acquireTokenStart",
  ACQUIRE_TOKEN_SUCCESS: "msal:acquireTokenSuccess",
  ACQUIRE_TOKEN_FAILURE: "msal:acquireTokenFailure",
  ACQUIRE_TOKEN_NETWORK_START: "msal:acquireTokenFromNetworkStart",
  SSO_SILENT_START: "msal:ssoSilentStart",
  SSO_SILENT_SUCCESS: "msal:ssoSilentSuccess",
  SSO_SILENT_FAILURE: "msal:ssoSilentFailure",
  ACQUIRE_TOKEN_BY_CODE_START: "msal:acquireTokenByCodeStart",
  ACQUIRE_TOKEN_BY_CODE_SUCCESS: "msal:acquireTokenByCodeSuccess",
  ACQUIRE_TOKEN_BY_CODE_FAILURE: "msal:acquireTokenByCodeFailure",
  HANDLE_REDIRECT_START: "msal:handleRedirectStart",
  HANDLE_REDIRECT_END: "msal:handleRedirectEnd",
  POPUP_OPENED: "msal:popupOpened",
  LOGOUT_START: "msal:logoutStart",
  LOGOUT_SUCCESS: "msal:logoutSuccess",
  LOGOUT_FAILURE: "msal:logoutFailure",
  LOGOUT_END: "msal:logoutEnd",
  RESTORE_FROM_BFCACHE: "msal:restoreFromBFCache"
};

// node_modules/@azure/msal-browser/dist/event/EventHandler.mjs
var EventHandler = class {
  constructor(logger, browserCrypto) {
    this.eventCallbacks = /* @__PURE__ */ new Map();
    this.logger = logger;
    this.browserCrypto = browserCrypto;
    this.listeningToStorageEvents = false;
    this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this);
  }
  /**
   * Adds event callbacks to array
   * @param callback
   */
  addEventCallback(callback) {
    if (typeof window !== "undefined") {
      const callbackId = createNewGuid();
      this.eventCallbacks.set(callbackId, callback);
      this.logger.verbose(`Event callback registered with id: ${callbackId}`);
      return callbackId;
    }
    return null;
  }
  /**
   * Removes callback with provided id from callback array
   * @param callbackId
   */
  removeEventCallback(callbackId) {
    this.eventCallbacks.delete(callbackId);
    this.logger.verbose(`Event callback ${callbackId} removed.`);
  }
  /**
   * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
   */
  enableAccountStorageEvents() {
    if (typeof window === "undefined") {
      return;
    }
    if (!this.listeningToStorageEvents) {
      this.logger.verbose("Adding account storage listener.");
      this.listeningToStorageEvents = true;
      window.addEventListener("storage", this.handleAccountCacheChange);
    } else {
      this.logger.verbose("Account storage listener already registered.");
    }
  }
  /**
   * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
   */
  disableAccountStorageEvents() {
    if (typeof window === "undefined") {
      return;
    }
    if (this.listeningToStorageEvents) {
      this.logger.verbose("Removing account storage listener.");
      window.removeEventListener("storage", this.handleAccountCacheChange);
      this.listeningToStorageEvents = false;
    } else {
      this.logger.verbose("No account storage listener registered.");
    }
  }
  /**
   * Emits events by calling callback with event message
   * @param eventType
   * @param interactionType
   * @param payload
   * @param error
   */
  emitEvent(eventType, interactionType, payload, error) {
    if (typeof window !== "undefined") {
      const message = {
        eventType,
        interactionType: interactionType || null,
        payload: payload || null,
        error: error || null,
        timestamp: Date.now()
      };
      this.logger.info(`Emitting event: ${eventType}`);
      this.eventCallbacks.forEach((callback, callbackId) => {
        this.logger.verbose(`Emitting event to callback ${callbackId}: ${eventType}`);
        callback.apply(null, [message]);
      });
    }
  }
  /**
   * Emit account added/removed events when cached accounts are changed in a different tab or frame
   */
  handleAccountCacheChange(e) {
    try {
      if (e.key?.includes(PersistentCacheKeys.ACTIVE_ACCOUNT_FILTERS)) {
        this.emitEvent(EventType.ACTIVE_ACCOUNT_CHANGED);
      }
      const cacheValue = e.newValue || e.oldValue;
      if (!cacheValue) {
        return;
      }
      const parsedValue = JSON.parse(cacheValue);
      if (typeof parsedValue !== "object" || !AccountEntity.isAccountEntity(parsedValue)) {
        return;
      }
      const accountEntity = CacheManager.toObject(new AccountEntity(), parsedValue);
      const accountInfo = accountEntity.getAccountInfo();
      if (!e.oldValue && e.newValue) {
        this.logger.info("Account was added to cache in a different window");
        this.emitEvent(EventType.ACCOUNT_ADDED, void 0, accountInfo);
      } else if (!e.newValue && e.oldValue) {
        this.logger.info("Account was removed from cache in a different window");
        this.emitEvent(EventType.ACCOUNT_REMOVED, void 0, accountInfo);
      }
    } catch (e2) {
      return;
    }
  }
};

export {
  Constants,
  OIDC_DEFAULT_SCOPES,
  PersistentCacheKeys,
  PromptValue,
  ServerResponseType,
  CredentialType,
  AuthenticationScheme,
  JsonWebTokenTypes,
  AuthErrorCodes_exports,
  AuthErrorMessage,
  AuthError,
  createAuthError,
  ClientAuthErrorCodes_exports,
  ClientAuthErrorMessage,
  ClientAuthError,
  createClientAuthError,
  DEFAULT_CRYPTO_IMPLEMENTATION,
  LogLevel,
  Logger,
  AzureCloudInstance,
  AuthToken_exports,
  TimeUtils_exports,
  CacheHelpers_exports,
  ClientConfigurationErrorCodes_exports,
  ClientConfigurationErrorMessage,
  ClientConfigurationError,
  createClientConfigurationError,
  StringUtils,
  ScopeSet,
  updateAccountTenantProfileData,
  AuthorityType,
  ProtocolMode,
  AccountEntity,
  UrlUtils_exports,
  UrlString,
  CacheError,
  CacheManager,
  DEFAULT_SYSTEM_OPTIONS,
  ServerError,
  ThrottlingUtils,
  CcsCredentialType,
  AADServerParamKeys_exports,
  RequestParameterBuilder,
  PerformanceEvents,
  invoke,
  invokeAsync,
  Authority,
  buildStaticAuthorityOptions,
  AuthorityFactory_exports,
  InteractionRequiredAuthErrorCodes_exports,
  InteractionRequiredAuthErrorMessage,
  InteractionRequiredAuthError,
  createInteractionRequiredAuthError,
  CacheRecord,
  ProtocolUtils,
  PopTokenGenerator,
  buildAccountToCache,
  AuthorizationCodeClient,
  RefreshTokenClient,
  SilentFlowClient,
  StubbedNetworkModule,
  AuthenticationHeaderParser,
  ServerTelemetryManager,
  StubPerformanceClient,
  PerformanceClient,
  pkceNotCreated,
  emptyNavigateUri,
  hashEmptyError,
  noStateInHash,
  hashDoesNotContainKnownProperties,
  unableToParseState,
  stateInteractionTypeMismatch,
  interactionInProgress,
  popupWindowError,
  emptyWindowError,
  userCancelled,
  monitorWindowTimeout,
  redirectInIframe,
  blockIframeReload,
  blockNestedPopups,
  silentLogoutUnsupported,
  noAccountError,
  noTokenRequestCacheError,
  unableToParseTokenRequestCacheError,
  noCachedAuthorityError,
  nonBrowserEnvironment,
  noNetworkConnectivity2 as noNetworkConnectivity,
  postRequestFailed2 as postRequestFailed,
  getRequestFailed,
  failedToParseResponse,
  unableToLoadToken,
  cryptoKeyNotFound,
  authCodeRequired,
  authCodeOrNativeAccountIdRequired,
  spaCodeAndNativeAccountIdPresent,
  unableToAcquireTokenFromNativePlatform,
  nativeHandshakeTimeout,
  nativeExtensionNotInstalled,
  nativeConnectionNotEstablished,
  uninitializedPublicClientApplication,
  nativePromptNotSupported,
  BrowserAuthErrorCodes_exports,
  BrowserAuthErrorMessage,
  BrowserAuthError,
  createBrowserAuthError,
  BrowserConstants,
  NativeConstants,
  NativeExtensionMethod,
  BrowserCacheLocation,
  HTTP_REQUEST_TYPE,
  TemporaryCacheKeys,
  StaticCacheKeys,
  InMemoryCacheKeys,
  ApiId,
  InteractionType,
  InteractionStatus,
  DEFAULT_REQUEST,
  WrapperSKU,
  CacheLookupPolicy,
  iFrameRenewalPolicies,
  LOG_LEVEL_CACHE_KEY,
  LOG_PII_CACHE_KEY,
  BROWSER_PERF_ENABLED_KEY,
  urlEncodeArr,
  base64Encode,
  sha256Digest,
  getRandomValues,
  createNewGuid,
  hashString,
  base64Decode,
  MemoryStorage,
  CryptoOps,
  EventType,
  EventHandler
};
/*! Bundled license information:

@azure/msal-common/dist/utils/Constants.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/AuthErrorCodes.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/AuthError.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/ClientAuthErrorCodes.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/ClientAuthError.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/crypto/ICrypto.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/logger/Logger.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/authority/AuthorityOptions.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/utils/TimeUtils.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/ClientConfigurationErrorCodes.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/ClientConfigurationError.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/utils/StringUtils.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/authority/ProtocolMode.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/account/ClientInfo.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/account/AccountInfo.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/authority/AuthorityType.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/account/TokenClaims.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/cache/entities/AccountEntity.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/utils/UrlUtils.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/url/UrlString.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/ServerError.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/telemetry/performance/PerformanceEvent.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/utils/FunctionWrappers.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/authority/OpenIdConfigResponse.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/authority/AuthorityMetadata.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/authority/CloudInstanceDiscoveryResponse.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/authority/CloudInstanceDiscoveryErrorResponse.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/authority/RegionDiscovery.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/account/AuthToken.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/cache/utils/CacheHelpers.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/authority/Authority.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/InteractionRequiredAuthErrorCodes.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/InteractionRequiredAuthError.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/request/AuthenticationHeaderParser.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/telemetry/performance/StubPerformanceClient.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/packageMetadata.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/request/ScopeSet.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/CacheErrorCodes.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/CacheError.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/cache/CacheManager.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/config/ClientConfiguration.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/network/ThrottlingUtils.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/network/NetworkManager.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/account/CcsCredential.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/constants/AADServerParamKeys.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/request/RequestValidator.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/request/RequestParameterBuilder.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/authority/AuthorityFactory.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/client/BaseClient.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/cache/entities/CacheRecord.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/utils/ProtocolUtils.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/crypto/PopTokenGenerator.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/cache/persistence/TokenCacheContext.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/response/ResponseHandler.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/utils/ClientAssertionUtils.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/client/AuthorizationCodeClient.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/client/RefreshTokenClient.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/client/SilentFlowClient.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/network/INetworkModule.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/JoseHeaderErrorCodes.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/error/JoseHeaderError.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/crypto/JoseHeader.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/telemetry/server/ServerTelemetryManager.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/telemetry/performance/PerformanceClient.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-common/dist/index.mjs:
  (*! @azure/msal-common v14.10.0 2024-05-07 *)

@azure/msal-browser/dist/error/BrowserAuthErrorCodes.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/error/BrowserAuthError.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/utils/BrowserConstants.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/encode/Base64Encode.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/crypto/BrowserCrypto.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/cache/MemoryStorage.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/encode/Base64Decode.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/cache/DatabaseStorage.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/cache/AsyncMemoryStorage.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/crypto/CryptoOps.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/event/EventType.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/event/EventHandler.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)
*/
//# sourceMappingURL=chunk-7GWHEDI2.js.map
