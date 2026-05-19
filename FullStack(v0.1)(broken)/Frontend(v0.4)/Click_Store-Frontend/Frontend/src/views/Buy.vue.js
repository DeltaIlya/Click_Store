import { ref, computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { ArrowLeft, CheckCircle } from 'lucide-vue-next';
import { api } from '@/api';
const form = ref({
    name: '',
    phone: '',
    address: ''
});
const errors = ref({
    name: '',
    phone: '',
    address: ''
});
const isConfirmed = ref(false);
const isSubmitting = ref(false);
const cartItems = ref([]);
onMounted(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cartItems.value = JSON.parse(saved);
    }
});
const validateName = () => {
    const name = form.value.name.trim();
    if (!name)
        errors.value.name = 'Укажите своё полное ФИО';
    else if (name.length < 3)
        errors.value.name = 'Имя должно состоять как минимум из трёх символов';
    else
        errors.value.name = '';
};
const validatePhone = () => {
    const phone = form.value.phone.trim();
    if (!phone)
        errors.value.phone = 'Укажите номер телефона';
    else
        errors.value.phone = '';
};
const validateAddress = () => {
    const address = form.value.address.trim();
    if (!address)
        errors.value.address = 'Укажите адрес';
    else if (address.length < 10)
        errors.value.address = 'Адрес слишком короткий';
    else
        errors.value.address = '';
};
const isFormValid = computed(() => {
    return form.value.name.trim() && form.value.phone.trim() && form.value.address.trim() &&
        !errors.value.name && !errors.value.phone && !errors.value.address;
});
const total = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});
const submitOrder = async () => {
    validateName();
    validatePhone();
    validateAddress();
    if (isFormValid.value && !isSubmitting.value) {
        isSubmitting.value = true;
        try {
            const orderData = {
                user_name: form.value.name,
                address: form.value.address,
                items: cartItems.value.map((item) => ({
                    product_id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: total.value
            };
            const result = await api.createOrder(orderData);
            console.log('Заказ создан, номер:', result.order_id);
            localStorage.removeItem('cart');
            isConfirmed.value = true;
        }
        catch (err) {
            alert('Ошибка при оформлении заказа: ' + err.message);
        }
        finally {
            isSubmitting.value = false;
        }
    }
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "min-h-screen" },
});
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fixed-header" },
});
/** @type {__VLS_StyleScopedClasses['fixed-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-card border-b border-border shadow-sm p-4" },
});
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
    to: "/cart",
    ...{ class: "p-2 hover:bg-secondary rounded-lg transition-colors" },
}));
const __VLS_2 = __VLS_1({
    to: "/cart",
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
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "text-2xl font-bold text-foreground" },
});
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "scroll-poll" },
});
/** @type {__VLS_StyleScopedClasses['scroll-poll']} */ ;
if (!__VLS_ctx.isConfirmed) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "p-4 space-y-6" },
    });
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "bg-card border border-border rounded-lg p-6 space-y-4" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
        ...{ class: "text-xl font-bold text-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "space-y-2" },
    });
    /** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "block font-semibold text-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onBlur: (__VLS_ctx.validateName) },
        value: (__VLS_ctx.form.name),
        type: "text",
        placeholder: "Илидар Ильич Ильичевский",
        ...{ class: "w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-input']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-primary']} */ ;
    if (__VLS_ctx.errors.name) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-red-500 text-sm" },
        });
        /** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
        (__VLS_ctx.errors.name);
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "space-y-2" },
    });
    /** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "block font-semibold text-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onBlur: (__VLS_ctx.validatePhone) },
        type: "tel",
        placeholder: "8 (800) 555-3535",
        ...{ class: "w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" },
    });
    (__VLS_ctx.form.phone);
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-input']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-primary']} */ ;
    if (__VLS_ctx.errors.phone) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-red-500 text-sm" },
        });
        /** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
        (__VLS_ctx.errors.phone);
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "space-y-2" },
    });
    /** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "block font-semibold text-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.textarea)({
        ...{ onBlur: (__VLS_ctx.validateAddress) },
        value: (__VLS_ctx.form.address),
        placeholder: "123456, г. Москва, ул. Ленина, д. 15, кв. 45",
        ...{ class: "w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" },
        rows: "3",
    });
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-input']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['resize-none']} */ ;
    if (__VLS_ctx.errors.address) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-red-500 text-sm" },
        });
        /** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
        (__VLS_ctx.errors.address);
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "border-t border-border pt-4" },
    });
    /** @type {__VLS_StyleScopedClasses['border-t']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "font-semibold text-foreground mb-2" },
    });
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "border-t border-border pt-2 flex justify-between font-bold text-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['border-t']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
    (__VLS_ctx.total);
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "p-4" },
    });
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "bg-card border border-border rounded-lg p-8 text-center space-y-6" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex justify-center" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center" },
    });
    /** @type {__VLS_StyleScopedClasses['w-20']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-20']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-green-500/20']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    let __VLS_11;
    /** @ts-ignore @type {typeof __VLS_components.CheckCircle} */
    CheckCircle;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        ...{ class: "w-12 h-12 text-green-500" },
    }));
    const __VLS_13 = __VLS_12({
        ...{ class: "w-12 h-12 text-green-500" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    /** @type {__VLS_StyleScopedClasses['w-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-green-500']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
        ...{ class: "text-3xl font-bold text-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-muted-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['text-muted-foreground']} */ ;
    let __VLS_16;
    /** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
        to: "/",
        ...{ class: "inline-block px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90" },
    }));
    const __VLS_18 = __VLS_17({
        to: "/",
        ...{ class: "inline-block px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    /** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-primary-foreground']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-primary/90']} */ ;
    const { default: __VLS_21 } = __VLS_19.slots;
    // @ts-ignore
    [isConfirmed, validateName, form, form, form, errors, errors, errors, errors, errors, errors, validatePhone, validateAddress, total,];
    var __VLS_19;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "h-10" },
});
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fixed-bottom" },
});
/** @type {__VLS_StyleScopedClasses['fixed-bottom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-card border-t border-border p-4 flex gap-3 shadow-lg" },
});
/** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    to: "/cart",
    ...{ class: "flex-1 px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2" },
}));
const __VLS_24 = __VLS_23({
    to: "/cart",
    ...{ class: "flex-1 px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
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
const { default: __VLS_27 } = __VLS_25.slots;
let __VLS_28;
/** @ts-ignore @type {typeof __VLS_components.ArrowLeft} */
ArrowLeft;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    ...{ class: "w-5 h-5" },
}));
const __VLS_30 = __VLS_29({
    ...{ class: "w-5 h-5" },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
// @ts-ignore
[];
var __VLS_25;
if (!__VLS_ctx.isConfirmed) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (__VLS_ctx.submitOrder) },
        disabled: (!__VLS_ctx.isFormValid || __VLS_ctx.isSubmitting),
        ...{ class: "flex-1 px-4 py-2 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-primary-foreground']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-primary/90']} */ ;
    /** @type {__VLS_StyleScopedClasses['disabled:opacity-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['disabled:cursor-not-allowed']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
    (__VLS_ctx.isSubmitting ? 'Отправка...' : 'Подтвердить заказ');
}
// @ts-ignore
[isConfirmed, submitOrder, isFormValid, isSubmitting, isSubmitting,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
