// Acl Imports
import {
  MongoAbility,
  createMongoAbility,
  CreateAbility,
  AbilityBuilder,
} from "@casl/ability";

const createAppAbility = createMongoAbility as CreateAbility<AppAbility>;

export function defineAbilityFor(role: string) {
  const { can, build } = new AbilityBuilder(createAppAbility);

  switch (role) {
    case "admin":
      can("manage", "all");
      break;
    case "client":
      can("read", "all");
      break;
  }

  return build();
}

type CRUD = "create" | "read" | "update" | "delete" | "manage";
type Abilities =
  | ["read", "User"]
  | [CRUD, "Article"]
  | ["manage", "all"]
  | ["read", "all"];
export type AppAbility = MongoAbility<Abilities>;
