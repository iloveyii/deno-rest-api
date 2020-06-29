import * as log from "https://deno.land/std/log/mod.ts";

// Simple default logger out of the box. You can customize it
// by overriding logger and handler named "default", or providing
// additional logger configurations
const DEFAULT_LEVEL = "INFO";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),

    file: new log.handlers.FileHandler("WARNING", {
      filename: "./log.txt",
      // you can change format of output message using any keys in `LogRecord`
      formatter: "{levelName} {msg}",
    }),
  },

  loggers: {
    // configure default logger available via short-hand methods above
    default: {
      level: "ERROR",
      handlers: ["console", "file"],
    },

    tasks: {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

let logger;

// get default logger
logger = log.getLogger();
logger.debug("first");

log.debug("Hello world debug");
log.info("Hello world");
log.warning("Hello world");
log.error("Hello world");
log.critical("500 Internal server error");
