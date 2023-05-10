import { Map } from "./node_modules/immutable/dist/immutable";

export default function getImmutableObject(obj) {
    return Map(obj);
}