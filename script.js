let app = ({
        data() {
            return {
                marque: [],
                type: [],
                piece: []
            }
        },
        methods: {
            async getMarque() {
                const response = await fetch('https://zyj20ho7.directus.app/items/marque');
                this.marque = await response.json();
                
                this.marque.data.forEach(
                    el => console.log(el.nom_marque)
                    )
    
            },
            async getType() {
                const response = await fetch('https://zyj20ho7.directus.app/items/type');
                this.type = await response.json();
                
                this.type.data.forEach(
                    el => console.log(el.nom_type)
                    )
    
            },
            async getPiece() {
                const response = await fetch('https://zyj20ho7.directus.app/items/piece');
                this.piece = await response.json();

                this.piece.data.forEach(
                    el => console.log(el.nom, el.reference, el.description, el.id_lieu)
                    )
    
            }


        },
        created() {
            this.getMarque();
            this.getType();
            this.getPiece();
        }
    })
    
    Vue.createApp(app).mount('#app')