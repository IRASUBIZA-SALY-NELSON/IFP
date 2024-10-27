import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CardInfoBadge = ({ heading, role }) => {
    return (_jsxs("div", { className: 'bg-white p-2 pb-0 rounded-2', children: [_jsx("span", { className: 'text-success d-block fw-semibold', children: heading }), _jsx("span", { className: 'fw-semibold', children: role })] }));
};
export default CardInfoBadge;
