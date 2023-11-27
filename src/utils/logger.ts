import { Logger, TStyle } from "tslog";
import { Response } from "express";
import supabase from "../utils/supabase";

const log = new Logger({});
const trace_log = process.env.LOGTRACE || false;

const okaoLogger = function (data: any, name: string, type: string) {
  if (trace_log) {
    if (type === "info") {
      log.info(data);
    } else if (type === "error") {
      log.error(data);
    } else if (type === "warn") {
      log.warn(data);
    } else if (type === "debug") {
      log.debug(data);
    } else {
      log.trace(data);
    }
  }
};

export { okaoLogger };
