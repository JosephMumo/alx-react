import { fromJS, getIn } from "./node_modules/immutable/dist/immutable";

export default function accessImmutableObject(object, array) {
    const obj = fromJS(object);
    return getIn(obj, array);
}