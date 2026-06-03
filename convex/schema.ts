import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  quotes: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    status: v.union(v.literal("pending"), v.literal("contacted"), v.literal("completed")),
  }).index("by_status", ["status"]),
});
