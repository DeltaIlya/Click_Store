import { ref, computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { ShoppingCart, Plus, Minus, ArrowLeft, LayoutGrid } from 'lucide-vue-next';
const cartItems = ref([]);
onMounted(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cartItems.value = JSON.parse(saved);
    }
});
//Обновление предметов из корзины
const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
        removeItem(id);
    }
    else {
        const item = cartItems.value.find(item => item.id === id);
        if (item) {
            item.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cartItems.value));
        }
    }
};
//Удаление предметов из корзины
const removeItem = (id) => {
    cartItems.value = cartItems.value.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cartItems.value));
};
//Сумма всех товаров в корзине
const total = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "min-h-screen bg-background pb-24" },
});
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-background']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-24']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sticky top-0 z-40 bg-card border-b border-border shadow-sm p-4" },
});
/** @type {__VLS_StyleScopedClasses['sticky']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-40']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-border']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center gap-3" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    to: "/",
    ...{ class: "p-2 hover:bg-secondary rounded-lg transition-colors" },
}));
const __VLS_2 = __VLS_1({
    to: "/",
    ...{ class: "p-2 hover:bg-secondary rounded-lg transition-colors" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.ArrowLeft} */
ArrowLeft;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ class: "w-5 h-5 text-foreground" },
}));
const __VLS_8 = __VLS_7({
    ...{ class: "w-5 h-5 text-foreground" },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "text-2xl font-bold text-foreground" },
});
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-sm text-muted-foreground" },
});
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted-foreground']} */ ;
(__VLS_ctx.cartItems.length);
(__VLS_ctx.cartItems.length >= 2 && __VLS_ctx.cartItems.length < 5 ? 'а' : '');
(__VLS_ctx.cartItems.length >= 5 ? 'ов' : '');
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "scroll-poll pb-32" },
});
/** @type {__VLS_StyleScopedClasses['scroll-poll']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-32']} */ ;
if (__VLS_ctx.cartItems.length > 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "p-4 space-y-4" },
    });
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
    for (const [item] of __VLS_vFor((__VLS_ctx.cartItems))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            key: (item.id),
            ...{ class: "bg-card border border-border rounded-lg p-4 flex gap-4" },
        });
        /** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
        /** @type {__VLS_StyleScopedClasses['border']} */ ;
        /** @type {__VLS_StyleScopedClasses['border-border']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
        /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-secondary" },
        });
        /** @type {__VLS_StyleScopedClasses['w-24']} */ ;
        /** @type {__VLS_StyleScopedClasses['h-24']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
        /** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
        /** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            src: (item.image),
            alt: (item.name),
            ...{ class: "w-full h-full object-cover" },
        });
        /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
        /** @type {__VLS_StyleScopedClasses['h-full']} */ ;
        /** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex-1 flex flex-col justify-between" },
        });
        /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
        /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
            ...{ class: "font-semibold text-foreground" },
        });
        /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
        (item.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-primary font-bold text-lg mt-1" },
        });
        /** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
        /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
        (item.price);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex items-center justify-between pt-2" },
        });
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
        /** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex items-center gap-2 bg-secondary p-1 rounded-lg" },
        });
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
        /** @type {__VLS_StyleScopedClasses['p-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.cartItems.length > 0))
                        return;
                    __VLS_ctx.updateQuantity(item.id, item.quantity - 1);
                    // @ts-ignore
                    [cartItems, cartItems, cartItems, cartItems, cartItems, cartItems, updateQuantity,];
                } },
            ...{ class: "p-1 hover:bg-background rounded transition-colors" },
        });
        /** @type {__VLS_StyleScopedClasses['p-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:bg-background']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
        let __VLS_11;
        /** @ts-ignore @type {typeof __VLS_components.Minus} */
        Minus;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
            ...{ class: "w-4 h-4 text-foreground" },
        }));
        const __VLS_13 = __VLS_12({
            ...{ class: "w-4 h-4 text-foreground" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        /** @type {__VLS_StyleScopedClasses['w-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['h-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "w-6 text-center font-semibold text-foreground" },
        });
        /** @type {__VLS_StyleScopedClasses['w-6']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
        (item.quantity);
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.cartItems.length > 0))
                        return;
                    __VLS_ctx.updateQuantity(item.id, item.quantity + 1);
                    // @ts-ignore
                    [updateQuantity,];
                } },
            ...{ class: "p-1 hover:bg-background rounded transition-colors" },
        });
        /** @type {__VLS_StyleScopedClasses['p-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:bg-background']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
        let __VLS_16;
        /** @ts-ignore @type {typeof __VLS_components.Plus} */
        Plus;
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
            ...{ class: "w-4 h-4 text-foreground" },
        }));
        const __VLS_18 = __VLS_17({
            ...{ class: "w-4 h-4 text-foreground" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        /** @type {__VLS_StyleScopedClasses['w-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['h-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ style: {} },
        });
        // @ts-ignore
        [];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ style: {} },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "bg-card border border-border rounded-lg p-4 space-y-3" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-primary text-lg" },
    });
    /** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
    (__VLS_ctx.total);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ style: {} },
    });
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex flex-col items-center justify-center py-12 px-4" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4" },
    });
    /** @type {__VLS_StyleScopedClasses['w-16']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-16']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    let __VLS_21;
    /** @ts-ignore @type {typeof __VLS_components.ShoppingCart} */
    ShoppingCart;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
        ...{ class: "w-8 h-8 text-muted-foreground" },
    }));
    const __VLS_23 = __VLS_22({
        ...{ class: "w-8 h-8 text-muted-foreground" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    /** @type {__VLS_StyleScopedClasses['w-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-muted-foreground']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
        ...{ class: "text-xl font-semibold text-foreground mb-2" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-muted-foreground text-center mb-6" },
    });
    /** @type {__VLS_StyleScopedClasses['text-muted-foreground']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
}
if (__VLS_ctx.cartItems.length > 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.cartItems.length > 0))
                    return;
                __VLS_ctx.$router.push('/Buy');
                // @ts-ignore
                [cartItems, total, $router,];
            } },
        ...{ class: "translate-4 px-8 py-3 rounded-lg font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all transform hover:scale-105 " },
    });
    /** @type {__VLS_StyleScopedClasses['translate-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-green-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-green-600']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
    /** @type {__VLS_StyleScopedClasses['transform']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ style: {} },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 flex gap-3 shadow-lg" },
});
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
let __VLS_26;
/** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    to: "/",
    ...{ class: "flex-1 px-4 py-2 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2" },
}));
const __VLS_28 = __VLS_27({
    to: "/",
    ...{ class: "flex-1 px-4 py-2 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary-foreground']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-primary/90']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
const { default: __VLS_31 } = __VLS_29.slots;
let __VLS_32;
/** @ts-ignore @type {typeof __VLS_components.LayoutGrid} */
LayoutGrid;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
    ...{ class: "w-5 h-5" },
}));
const __VLS_34 = __VLS_33({
    ...{ class: "w-5 h-5" },
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
// @ts-ignore
[];
var __VLS_29;
let __VLS_37;
/** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({
    to: "/cart",
    ...{ class: "flex-1 px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2" },
}));
const __VLS_39 = __VLS_38({
    to: "/cart",
    ...{ class: "flex-1 px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-border']} */ ;
/** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
const { default: __VLS_42 } = __VLS_40.slots;
let __VLS_43;
/** @ts-ignore @type {typeof __VLS_components.ShoppingCart} */
ShoppingCart;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
    ...{ class: "w-5 h-5" },
}));
const __VLS_45 = __VLS_44({
    ...{ class: "w-5 h-5" },
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
// @ts-ignore
[];
var __VLS_40;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
