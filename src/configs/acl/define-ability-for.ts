// Acl Imports
import {
  MongoAbility,
  createMongoAbility,
  AbilityBuilder,
} from "@casl/ability";

export function defineAbilityFor(role: string) {
  const { can, cannot, build } = new AbilityBuilder<AppAbility>(
    createMongoAbility
  );

  // Owner
  if (role === "owner") {
    can("manage", "all");
  }

  // Admin
  if (role === "admin") {
    can("manage", "all");
  }

  // Client
  if (role === "client") {
    can("read", "all");
  }

  // Visitor
  if (role === "visitor") {
    can(["read"], "login");
    cannot("delete", "all", {});
  }

  return build();
}

export type AppAbility = MongoAbility<[Actions, string]>;
type Actions = "create" | "read" | "update" | "delete" | "manage";
