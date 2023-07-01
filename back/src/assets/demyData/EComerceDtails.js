import React from 'react';

const data = [
    {
        id:1,
        title: "JUMIA",
        image1:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA1VBMVEX+/P3///8AAADT0dK9u7zt6+xvbW4VExTm5eaqqakyMTHY2Njx7/BycXInJSb8/fsrKyu0srMMCgvGxMV3dnbxlwDi4OGcmpvLy8v49vf5///vmgD2lQCioKEbGRr++v5pZ2j6jwD27db71sD+07r52r3659uGhIVQTk/8/PP43sz0oEz/lSD61qzxvIv4lwD4mzH4s1T//u/vwnnyni78skr8unP70KBWVFXqrFr1mRo6Ojr47ufvtmvyz5r4zKr7vIXv3cP/zpD747H94770njjw2c4GjI9DAAADzklEQVR4nO3YeVPbRhjHce3K5rAUL1jItrTCiqAYK0lDSjlSQzlS2vf/kvqsLIzlofyVeCbq98Ph9XqHwb/Z4/F6HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz2l3I9q9Lhn6pWhz+PXupZMLl9KmVKa1XfLdH0/UTvjcbLsUf44UJ4KwvW4VNBVXuL73ZU+vzHCpMYcHf9yMk3TPG1fVmpf6x21634tu/r6vVIjrYfNtNSp7neVr3XnpX+mZyuDTJl++Ghjm9lPv6Z5+eP/+w17Dmt7Jaye3lJqS+t+c8GN9UAHjbDUoXQdvozK889ZfHb2Jc5s9luan2/mLWyOC6v7WljvJIfTlbRUMlkPS+0MtPTVy9XkZfp7Vtj4bHoRf7LFZZpv9J1swFthDXT0ktaioxnWgd6W1XpQh+Wlx4W1c3uV3sf2LCuu082+lR/PhRW+HtbeRPfDZWdH655uhCXrUo/UV6396rkx+R9xlmXFUVnOY2vtRes2rTfCupF8tpYrbqK3o2ZY3o3uJWqo6z2+9G6z+Z9Xd0/GM9P7h6sv2dMr1cdP7a2Zpd5rvV/PImlGfiMs2d1dS85IGSSMeoztiTy6zUultxfZt9aFtftGWKGu6wc3asstu5ewVKJdhSH29F7i6lj1KIfgXxKaNM3UFvHn/1VYShbezPXIWpska2FJbXF6OBqNDl3DzSzzIbO2eHJN7yi287h9M+vwrbDkvJM93NWecjA2wqqqrhdDN51uXUJ3LivzKDt9fNy6sE71TfLfYYV77rBb1AfNmXWjB/1nA1mQrnT4aOduVy9TcytZzdt2Gqpw4naeXZfAs+FAoqnDcguxJ/nshV4jLDchd8PuQjhyE894+Ulsi7K8mz9M0zgrvrWpznJZ+LPqLAuk4DzY70Sic9qvuuqw3EKUYrReec9hqe627lUvV38n6emePJTpQzG/s4VsXdd/x5d5iyp4FR18lTJzsYO/06tmVc8irLCvB4sifTUsiXC8Ut3vu63NpF4padk4judZdlmaFi1DtxOJm+6iNugvo+qPvKqwmiyGRdVJWLcCl1jHtb42bsBm7kOTfJJO/5lnhSzG+Dovyxbt7y6syVanvsuTh6ETDBe3e8qP6g+Gyt8NF4O6URR6SRCEKoiibiMseckVZKbM06OT+/tpmp6bvEUXWioYdxs3pPX+vvJs2fJWWvXN6tpdV9XjbkdzF5nJxXmLwvLW3/B3IBWWCzM3zvf+4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbNS/NpVD2aT5SpwAAAAASUVORK5CYII=",
        image2:"https://www.tekiano.com/wp-content/uploads/2019/01/jumia.jpg",
        image:"https://www.therollingnotes.com/wp-content/uploads/new_website_jumia.jpg",
        description: "Jumia is Africa's leading online marketplace, offering a wide range of products and services to customers across the continent. As a one-stop destination for online shopping, Jumia provides convenience, variety, and affordability to millions of shoppers in Africa.",
    },
    {
        id:2,
        title: "AliBABA",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAPBieZwY9Cbd3SF2D8kamQDW1lKztdM1TQ&usqp=CAU",
        image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TyOwFbcGDIpHk0gc67kg-YPla7b2W-2dIA&usqp=CAU",
        image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwRz_gfiLvcXZnr9u9oG7hZ-sDlWK5Q7ZvQ&usqp=CAU",
        description: "Alibaba is a global online platform that connects businesses and individuals from around the world. With a focus on B2B (business-to-business) and B2C (business-to-consumer) transactions, Alibaba facilitates trade and fosters connections between buyers and sellers on a large scale",
    },
    {
        id:3,
        title: " AliExpress",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPf2uhmxMOg8puO04dlWLoSBsNdMFPOSTog&usqp=CAU",
        image1:"https://sensorstechforum.com/wp-content/uploads/2019/06/aliexpress-virus-image-redirect-sensorstechforum-com.jpg",
        image2:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.frandroid.com%2Fproduits-android%2Fsmartphone%2F676573_comment-commander-sur-aliexpress-nos-conseils-pour-trouver-les-bonnes-affaires&psig=AOvVaw0AhtJQ0U8TxSdfNYTwor0y&ust=1686388719966000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKDIydrttf8CFQAAAAAdAAAAABAO",
        description: "AliExpress is an online retail platform owned by the Alibaba Group, providing a wide range of products to consumers worldwide. As a global marketplace, AliExpress connects buyers with sellers from different countries, offering competitive prices and a vast selection of ",
    },
];

export default data;
