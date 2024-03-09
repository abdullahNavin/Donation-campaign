import { toast } from "react-toastify";
const getItems = () => {
    const DonateItem = localStorage.getItem('DonateItem')
    if (DonateItem) {
        const ParseDonsteItem = JSON.parse(DonateItem)
        return ParseDonsteItem
    }
    return []
}

const setItems = (id) => {
    const existItems = getItems()
    const existId = existItems.find(itemId => itemId === id)
    if(!existId){
        existItems.push(id)
        localStorage.setItem('DonateItem', JSON.stringify(existItems))
        toast.success('You Donate $290 Successfully')
    }
    else{
        toast.warning('You already Donated in this category',{
            theme: "colored",
        })
    }

}
export { setItems, getItems }