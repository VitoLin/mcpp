"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNdjsonChunk = parseNdjsonChunk;
function parseNdjsonChunk(buffer, chunk) {
    var _a;
    buffer += chunk.toString();
    // Split into lines (NDJSON)
    const parts = buffer.split(/\r?\n/);
    buffer = (_a = parts.pop()) !== null && _a !== void 0 ? _a : ""; // keep last incomplete line
    const records = parts.map((line) => {
        if (!line.trim()) {
            return { line, msg: undefined };
        }
        try {
            return { line, msg: JSON.parse(line) };
        }
        catch (_a) {
            // Non-JSON lines are returned with msg === undefined so the caller can pass them through
            return { line, msg: undefined };
        }
    });
    return { buffer, records };
}
