function CartItem() {
    return (
        <tr className="shadow-md ">
            <td className="flex gap-2 p-4">
                <img src="" alt="" />
                <span>LCD Monitor</span>
            </td>
            <td>
                <span>$650</span>
            </td>
            <td>
                <input type="number" className="border outline-none text-center" min={1}/>
            </td>
            <td>
                <span>$650</span>
            </td>
        </tr>
    );
}

export default CartItem;