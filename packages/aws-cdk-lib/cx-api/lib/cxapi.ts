// output directory into which to emit synthesis outputs. CDK doesn't allow outdir
// to be specified both through the CDK_OUTDIR environment variable and the through
// aws:cdk:outdir context.
export const OUTDIR_ENV = 'CDK_OUTDIR';
export const CONTEXT_ENV = 'CDK_CONTEXT_JSON';

/**
 * The name of the temporary file where the context is stored.
 */
export const CONTEXT_OVERFLOW_LOCATION_ENV = 'CONTEXT_OVERFLOW_LOCATION_ENV';

/**
 * Environment variable set by the CDK CLI with the default AWS account ID.
 */
export const DEFAULT_ACCOUNT_ENV = 'CDK_DEFAULT_ACCOUNT';

/**
 * Environment variable set by the CDK CLI with the default AWS region.
 */
export const DEFAULT_REGION_ENV = 'CDK_DEFAULT_REGION';

/**
 * Version of Cloud Assembly expected by CDK Toolkit.
 *
 * Despite it's name, this value applies to all version of the CDK Toolkit, not just the CLI.
 *
 * CLI started emitting this at 1.10.1
 */
export const CLI_ASM_VERSION_ENV = 'CDK_CLI_ASM_VERSION';

/**
 * Version of the CLI currently running.
 *
 * CLI started emitting this at 1.10.1
 * Will not be present if the CDK app is run by any Toolkit variation other than the CLI.
 */
export const CLI_VERSION_ENV = 'CDK_CLI_VERSION';

/**
 * Package & version of the CDK Toolkit running the app.
 *
 * In the format "<package>@x.y.z", e.g  "aws-cdk@2.1006.0" or "@aws-cdk/toolkit-lib@1.0.0"
 */
export const TOOLKIT_VERSION_ENV = 'CDK_TOOLKIT_VERSION';

/**
 * If a context value is an object with this key, it indicates an error
 */
export const PROVIDER_ERROR_KEY = '$providerError';

/**
 * This SSM parameter does not invalidate the template
 *
 * If this string occurs in the description of an SSM parameter, the CLI
 * will not assume that the stack must always be redeployed.
 */
export const SSMPARAM_NO_INVALIDATE = '[cdk:skip]';
