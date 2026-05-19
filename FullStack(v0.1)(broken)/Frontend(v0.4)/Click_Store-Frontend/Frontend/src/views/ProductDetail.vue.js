import { ref, onMounted } from 'vue';
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { ArrowLeft, ShoppingCart, Minus, Plus, LayoutGrid } from 'lucide-vue-next';
import { api } from '@/api';
const router = useRouter();
const route = useRoute();
const product = ref(null);
const quantity = ref(1);
const loading = ref(true);
const error = ref('');
onMounted(async () => {
    const id = parseInt(route.params.id);
    try {
        const data = await api.getProductById(id);
        product.value = {
            id: data.id,
            name: data.name,
            price: data.price,
            image: data.image_url,
            category: data.category,
            description: data.description || 'Описание товара временно отсутствует'
        };
    }
    catch (err) {
        error.value = err.message;
        console.error('Ошибка загрузки товара:', err);
    }
    finally {
        loading.value = false;
    }
});
const goBack = () => {
    router.back();
};
const addToCart = () => {
    if (!product.value)
        return;
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cartItems.find((item) => item.id === product.value.id);
    if (existingItem) {
        existingItem.quantity += quantity.value;
    }
    else {
        cartItems.push({
            ...product.value,
            quantity: quantity.value
        });
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    router.push('/cart');
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center" },
});
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black/50']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-card w-full sm:w-96 sm:rounded-2xl rounded-t-2xl max-h-[80vh] overflow-y-auto flex flex-col" },
});
/** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:w-96']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-t-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['max-h-[80vh]']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between transition-all duration-300" },
});
/** @type {__VLS_StyleScopedClasses['sticky']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.goBack) },
    ...{ class: "p-2 hover:bg-secondary rounded-lg transition-colors" },
});
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.ArrowLeft} */
ArrowLeft;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "w-5 h-5 text-foreground" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "w-5 h-5 text-foreground" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div)({
    ...{ class: "w-10" },
});
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-1 p-4 text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-muted-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['text-muted-foreground']} */ ;
}
else if (__VLS_ctx.error) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-1 p-4 text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-red-500" },
    });
    /** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
    (__VLS_ctx.error);
}
else if (__VLS_ctx.product) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-1 p-4 space-y-6 scroll-poll" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['scroll-poll']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "w-full rounded-lg overflow-hidden bg-secondary h-64 flex items-center justify-center" },
    });
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-64']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.product.image),
        alt: (__VLS_ctx.product.name),
        ...{ class: "w-full h-full object-cover" },
    });
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex items-start justify-between" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-start']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
        ...{ class: "text-2xl font-bold text-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    (__VLS_ctx.product.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex items-baseline gap-2 pt-2" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-baseline']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-3xl font-bold text-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
    (__VLS_ctx.product.price);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "space-y-2" },
    });
    /** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-sm text-muted-foreground leading-relaxed" },
    });
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-muted-foreground']} */ ;
    /** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
    (__VLS_ctx.product.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "space-y-3" },
    });
    /** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "block font-semibold text-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex items-center gap-4 bg-secondary p-2 rounded-lg w-fit" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-fit']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!!(__VLS_ctx.loading))
                    return;
                if (!!(__VLS_ctx.error))
                    return;
                if (!(__VLS_ctx.product))
                    return;
                __VLS_ctx.quantity = Math.max(1, __VLS_ctx.quantity - 1);
                // @ts-ignore
                [goBack, loading, error, error, product, product, product, product, product, product, quantity, quantity,];
            } },
        ...{ class: "p-1 hover:bg-background rounded transition-colors" },
    });
    /** @type {__VLS_StyleScopedClasses['p-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-background']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
    let __VLS_5;
    /** @ts-ignore @type {typeof __VLS_components.Minus} */
    Minus;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        ...{ class: "w-5 h-5 text-foreground" },
    }));
    const __VLS_7 = __VLS_6({
        ...{ class: "w-5 h-5 text-foreground" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    /** @type {__VLS_StyleScopedClasses['w-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "w-8 text-center font-semibold text-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['w-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    (__VLS_ctx.quantity);
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!!(__VLS_ctx.loading))
                    return;
                if (!!(__VLS_ctx.error))
                    return;
                if (!(__VLS_ctx.product))
                    return;
                __VLS_ctx.quantity = __VLS_ctx.quantity + 1;
                // @ts-ignore
                [quantity, quantity, quantity,];
            } },
        ...{ class: "p-1 hover:bg-background rounded transition-colors" },
    });
    /** @type {__VLS_StyleScopedClasses['p-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-background']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
    let __VLS_10;
    /** @ts-ignore @type {typeof __VLS_components.Plus} */
    Plus;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        ...{ class: "w-5 h-5 text-foreground" },
    }));
    const __VLS_12 = __VLS_11({
        ...{ class: "w-5 h-5 text-foreground" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    /** @type {__VLS_StyleScopedClasses['w-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-1 p-4 text-center text-muted-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-muted-foreground']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sticky bottom-0 bg-card border-t border-border p-4 space-y-3" },
});
/** @type {__VLS_StyleScopedClasses['sticky']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
if (__VLS_ctx.product) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (__VLS_ctx.addToCart) },
        ...{ class: "w-full px-4 py-2 rounded-lg font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2" },
    });
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-green-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-green-600']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
    /** @type {__VLS_StyleScopedClasses['transform']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    let __VLS_15;
    /** @ts-ignore @type {typeof __VLS_components.ShoppingCart} */
    ShoppingCart;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
        ...{ class: "w-5 h-5" },
    }));
    const __VLS_17 = __VLS_16({
        ...{ class: "w-5 h-5" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    /** @type {__VLS_StyleScopedClasses['w-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-5']} */ ;
}
let __VLS_20;
/** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    to: "/",
    ...{ class: "w-full px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors text-center block flex items-center justify-center gap-2" },
}));
const __VLS_22 = __VLS_21({
    to: "/",
    ...{ class: "w-full px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors text-center block flex items-center justify-center gap-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-border']} */ ;
/** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
const { default: __VLS_25 } = __VLS_23.slots;
let __VLS_26;
/** @ts-ignore @type {typeof __VLS_components.LayoutGrid} */
LayoutGrid;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    ...{ class: "w-5 h-5" },
}));
const __VLS_28 = __VLS_27({
    ...{ class: "w-5 h-5" },
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
// @ts-ignore
[product, addToCart,];
var __VLS_23;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
