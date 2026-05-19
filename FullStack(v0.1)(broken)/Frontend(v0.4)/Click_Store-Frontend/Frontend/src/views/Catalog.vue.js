import { ref, computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { Search, ShoppingCart, LayoutGrid } from 'lucide-vue-next';
import { api } from '@/api';
const products = ref([]);
const loading = ref(true);
const error = ref('');
const searchQuery = ref('');
const selectedCategory = ref('Все');
const CATEGORIES = [
    'Все',
    'Электроника',
    'Аудио',
    'Утилита',
    'Фотография',
];
onMounted(async () => {
    try {
        const data = await api.getProducts();
        products.value = data.map((p) => ({
            id: p.id,
            name: p.name,
            price: p.price,
            image: p.image_url,
            category: p.category
        }));
    }
    catch (err) {
        error.value = err.message;
        console.error('Ошибка загрузки товаров:', err);
    }
    finally {
        loading.value = false;
    }
});
const filteredProducts = computed(() => {
    return products.value.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase());
        const matchesCategory = selectedCategory.value === 'Все' || product.category === selectedCategory.value;
        return matchesSearch && matchesCategory;
    });
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "min-h-screen h-screen bg-background flex flex-col" },
});
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-background']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-shrink-0 z-40 bg-card border-b border-border shadow-sm" },
});
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-40']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-border']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-4 space-y-4" },
});
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center justify-between" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "text-white text-2xl font-bold text-foreground lobster-font" },
});
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
/** @type {__VLS_StyleScopedClasses['lobster-font']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: "https://cdn.builder.io/api/v1/image/assets%2Fa3c474ad0894486f9566ed74bbf42ce1%2Fd433de2adcc546cba35b820dd75dccac?format=webp&width=800&height=1200",
    alt: "Logo",
    ...{ class: "h-10 w-10 rounded-full object-cover" },
});
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "relative" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Search} */
Search;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-3']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-muted-foreground']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    value: (__VLS_ctx.searchQuery),
    type: "text",
    placeholder: "Поиск...",
    ...{ class: "w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" },
});
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-10']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-input']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder-muted-foreground']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "relative px-4 pb-4 bg-card" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center gap-2" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-1 overflow-x-auto scrollbar-hide flex gap-2 scroll-smooth" },
});
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-x-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['scrollbar-hide']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['scroll-smooth']} */ ;
for (const [category] of __VLS_vFor((__VLS_ctx.CATEGORIES))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectedCategory = category;
                // @ts-ignore
                [searchQuery, CATEGORIES, selectedCategory,];
            } },
        key: (category),
        ...{ class: ([
                'px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors flex-shrink-0',
                __VLS_ctx.selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-primary/10'
            ]) },
    });
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['whitespace-nowrap']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
    (category);
    // @ts-ignore
    [selectedCategory,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-1 scroll-poll relative" },
});
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['scroll-poll']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-4" },
});
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-center py-12" },
    });
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-muted-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['text-muted-foreground']} */ ;
}
else if (__VLS_ctx.error) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-center py-12" },
    });
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-red-500" },
    });
    /** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
    (__VLS_ctx.error);
}
else if (__VLS_ctx.filteredProducts.length > 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4" },
    });
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['grid-cols-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['sm:grid-cols-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['md:grid-cols-4']} */ ;
    for (const [product] of __VLS_vFor((__VLS_ctx.filteredProducts))) {
        let __VLS_5;
        /** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
        RouterLink;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
            key: (product.id),
            to: ({ name: 'ProductDetail', params: { id: product.id } }),
            ...{ class: "group cursor-pointer rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow bg-card h-full flex flex-col" },
        }));
        const __VLS_7 = __VLS_6({
            key: (product.id),
            to: ({ name: 'ProductDetail', params: { id: product.id } }),
            ...{ class: "group cursor-pointer rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow bg-card h-full flex flex-col" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        /** @type {__VLS_StyleScopedClasses['group']} */ ;
        /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
        /** @type {__VLS_StyleScopedClasses['border']} */ ;
        /** @type {__VLS_StyleScopedClasses['border-border']} */ ;
        /** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:shadow-md']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-shadow']} */ ;
        /** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
        /** @type {__VLS_StyleScopedClasses['h-full']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
        const { default: __VLS_10 } = __VLS_8.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "relative w-full pt-full overflow-hidden bg-secondary h-32 sm:h-40" },
        });
        /** @type {__VLS_StyleScopedClasses['relative']} */ ;
        /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
        /** @type {__VLS_StyleScopedClasses['pt-full']} */ ;
        /** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
        /** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
        /** @type {__VLS_StyleScopedClasses['h-32']} */ ;
        /** @type {__VLS_StyleScopedClasses['sm:h-40']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            src: (product.image),
            alt: (product.name),
            ...{ class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" },
        });
        /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
        /** @type {__VLS_StyleScopedClasses['h-full']} */ ;
        /** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
        /** @type {__VLS_StyleScopedClasses['group-hover:scale-105']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
        /** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "p-3 flex-1 flex flex-col justify-between" },
        });
        /** @type {__VLS_StyleScopedClasses['p-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
        /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
            ...{ class: "font-semibold text-sm sm:text-base text-foreground truncate" },
        });
        /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
        /** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-foreground']} */ ;
        /** @type {__VLS_StyleScopedClasses['truncate']} */ ;
        (product.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-primary font-bold text-base sm:text-lg" },
        });
        /** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-base']} */ ;
        /** @type {__VLS_StyleScopedClasses['sm:text-lg']} */ ;
        (product.price);
        // @ts-ignore
        [loading, error, error, filteredProducts, filteredProducts,];
        var __VLS_8;
        // @ts-ignore
        [];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-center py-12" },
    });
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-muted-foreground" },
    });
    /** @type {__VLS_StyleScopedClasses['text-muted-foreground']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-shrink-0 bg-card border-t border-border p-4 flex gap-3 shadow-lg" },
});
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    to: "/",
    ...{ class: "flex-1 px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2" },
}));
const __VLS_13 = __VLS_12({
    to: "/",
    ...{ class: "flex-1 px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
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
const { default: __VLS_16 } = __VLS_14.slots;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.LayoutGrid} */
LayoutGrid;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    ...{ class: "w-5 h-5" },
}));
const __VLS_19 = __VLS_18({
    ...{ class: "w-5 h-5" },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
// @ts-ignore
[];
var __VLS_14;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    to: "/cart",
    ...{ class: "flex-1 px-4 py-2 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2" },
}));
const __VLS_24 = __VLS_23({
    to: "/cart",
    ...{ class: "flex-1 px-4 py-2 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
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
const { default: __VLS_27 } = __VLS_25.slots;
let __VLS_28;
/** @ts-ignore @type {typeof __VLS_components.ShoppingCart} */
ShoppingCart;
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
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
