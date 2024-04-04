import React from 'react';

function SubscribeForm({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <form className={className} action="http://bookinvideo.local/product/codigo-limpo/" method="post" encType="multipart/form-data">
            <input type="hidden" name="quantity" value="1" inputMode="numeric" autoComplete="off" />
            <>{ children }</>
        </form>
    )
}

export default SubscribeForm;