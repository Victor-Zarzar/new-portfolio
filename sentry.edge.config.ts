import env from "@/env.mjs";
import * as Sentry from "@sentry/nextjs";

Sentry.init({
	dsn: env.NEXT_PUBLIC_SENTRY_DSN,
	environment: env.NODE_ENV,
	tracesSampleRate: 1.0,
	enableLogs: true,
	sendDefaultPii: true,
	integrations: [
		Sentry.vercelAIIntegration({
			recordInputs: true,
			recordOutputs: true,
		}),
		Sentry.consoleLoggingIntegration({ levels: ["info", "warn", "error"] }),
	],
});
