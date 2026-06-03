import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("quotes"),
      _creationTime: v.number(),
      name: v.string(),
      email: v.string(),
      message: v.string(),
      status: v.union(v.literal("pending"), v.literal("contacted"), v.literal("completed")),
    })
  ),
  handler: async (ctx) => {
    return await ctx.db.query("quotes").order("desc").collect();
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("quotes"),
    status: v.union(v.literal("pending"), v.literal("contacted"), v.literal("completed")),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
    return null;
  },
});

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  returns: v.id("quotes"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("quotes", {
      name: args.name,
      email: args.email,
      message: args.message,
      status: "pending",
    });
  },
});
