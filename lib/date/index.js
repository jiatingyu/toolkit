"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dayjs = exports.diff = exports.format = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
exports.Dayjs = dayjs_1.default;
const calendar_1 = __importDefault(require("dayjs/plugin/calendar"));
const duration_1 = __importDefault(require("dayjs/plugin/duration"));
dayjs_1.default.extend(calendar_1.default);
dayjs_1.default.extend(duration_1.default);
const format = (date, layout = "YYYY-MM-DD") => {
    return (0, dayjs_1.default)(date).format(layout);
};
exports.format = format;
const diff = (date1, date2) => {
    let x = (0, dayjs_1.default)(date1);
    let y = (0, dayjs_1.default)(date2);
    return dayjs_1.default.duration(x.diff(y));
};
exports.diff = diff;
