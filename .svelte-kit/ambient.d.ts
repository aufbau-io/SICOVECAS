
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const CONTENTFUL_SPACE_ID: string;
	export const CONTENTFUL_ACCESS_TOKEN: string;
	export const CONTENTFUL_MANAGEMENT_TOKEN: string;
	export const ADSK_3DSMAX_x64_2023: string;
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const CABAL_DIR: string;
	export const ChocolateyInstall: string;
	export const ChocolateyLastPathUpdate: string;
	export const ChocolateyToolsLocation: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const CUDA: string;
	export const CUDA_PATH: string;
	export const CUDA_PATH_V10_0: string;
	export const CUDA_PATH_V10_1: string;
	export const CUDA_PATH_V12_1: string;
	export const DriverData: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const GHCUP_INSTALL_BASE_PREFIX: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const INIT_CWD: string;
	export const INTEL_DEV_REDIST: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const MIC_LD_LIBRARY_PATH: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const npm_config_argv: string;
	export const npm_config_bin_links: string;
	export const npm_config_email: string;
	export const npm_config_engine_strict: string;
	export const npm_config_ignore_optional: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_init_license: string;
	export const npm_config_init_version: string;
	export const npm_config_registry: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_username: string;
	export const npm_config_user_agent: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_version_git_message: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_dependencies_autoprefixer: string;
	export const npm_package_dependencies_cssnano: string;
	export const npm_package_dependencies_p5: string;
	export const npm_package_dependencies_svelte_preprocess: string;
	export const npm_package_dependencies_tailwindcss: string;
	export const npm_package_dependencies_three: string;
	export const npm_package_dependencies__sveltejs_adapter_netlify: string;
	export const npm_package_description: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte3: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__fontsource_fira_mono: string;
	export const npm_package_devDependencies__neoconfetti_svelte: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_name: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_format: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_type: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const NVCUDASAMPLES10_0_ROOT: string;
	export const NVCUDASAMPLES10_1_ROOT: string;
	export const NVCUDASAMPLES_ROOT: string;
	export const NVM_HOME: string;
	export const NVM_SYMLINK: string;
	export const NVTOOLSEXT_PATH: string;
	export const OneDrive: string;
	export const OneDriveConsumer: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const SESSIONNAME: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VK_SDK_PATH: string;
	export const VULKAN_SDK: string;
	export const windir: string;
	export const YARN_WRAP_OUTPUT: string;
	export const _MSYS2_BASH: string;
	export const _MSYS2_PREFIX: string;
	export const __PSLockDownPolicy: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		CONTENTFUL_SPACE_ID: string;
		CONTENTFUL_ACCESS_TOKEN: string;
		CONTENTFUL_MANAGEMENT_TOKEN: string;
		ADSK_3DSMAX_x64_2023: string;
		ALLUSERSPROFILE: string;
		APPDATA: string;
		CABAL_DIR: string;
		ChocolateyInstall: string;
		ChocolateyLastPathUpdate: string;
		ChocolateyToolsLocation: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		CUDA: string;
		CUDA_PATH: string;
		CUDA_PATH_V10_0: string;
		CUDA_PATH_V10_1: string;
		CUDA_PATH_V12_1: string;
		DriverData: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		GHCUP_INSTALL_BASE_PREFIX: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		INIT_CWD: string;
		INTEL_DEV_REDIST: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		MIC_LD_LIBRARY_PATH: string;
		NODE: string;
		NODE_ENV: string;
		npm_config_argv: string;
		npm_config_bin_links: string;
		npm_config_email: string;
		npm_config_engine_strict: string;
		npm_config_ignore_optional: string;
		npm_config_ignore_scripts: string;
		npm_config_init_license: string;
		npm_config_init_version: string;
		npm_config_registry: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		npm_config_username: string;
		npm_config_user_agent: string;
		npm_config_version_commit_hooks: string;
		npm_config_version_git_message: string;
		npm_config_version_git_sign: string;
		npm_config_version_git_tag: string;
		npm_config_version_tag_prefix: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_dependencies_autoprefixer: string;
		npm_package_dependencies_cssnano: string;
		npm_package_dependencies_p5: string;
		npm_package_dependencies_svelte_preprocess: string;
		npm_package_dependencies_tailwindcss: string;
		npm_package_dependencies_three: string;
		npm_package_dependencies__sveltejs_adapter_netlify: string;
		npm_package_description: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte3: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__fontsource_fira_mono: string;
		npm_package_devDependencies__neoconfetti_svelte: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_name: string;
		npm_package_readmeFilename: string;
		npm_package_scripts_build: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_format: string;
		npm_package_scripts_lint: string;
		npm_package_scripts_preview: string;
		npm_package_type: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		NVCUDASAMPLES10_0_ROOT: string;
		NVCUDASAMPLES10_1_ROOT: string;
		NVCUDASAMPLES_ROOT: string;
		NVM_HOME: string;
		NVM_SYMLINK: string;
		NVTOOLSEXT_PATH: string;
		OneDrive: string;
		OneDriveConsumer: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		SESSIONNAME: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VK_SDK_PATH: string;
		VULKAN_SDK: string;
		windir: string;
		YARN_WRAP_OUTPUT: string;
		_MSYS2_BASH: string;
		_MSYS2_PREFIX: string;
		__PSLockDownPolicy: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
