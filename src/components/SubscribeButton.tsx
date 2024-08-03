function SubscribeButton(props: { text: string, className: string }) {
    const cleanCodeProductID = (window as any).wp_data?.course;
    const cleanCodeProductLink = (window as any).wp_data?.product;

    return (
        <form action={cleanCodeProductLink} method="post" encType="multipart/form-data">
            <input type="hidden" name="quantity" value="1" inputMode="numeric" autoComplete="off" />
            <button 
                className={props.className} 
                type="submit" 
                name="add-to-cart" 
                value={ cleanCodeProductID }
            >{ props.text }</button>
        </form>
    )
}

export default SubscribeButton;