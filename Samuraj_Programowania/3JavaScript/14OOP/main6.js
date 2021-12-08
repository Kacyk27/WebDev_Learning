//Problem utraty wiązania

// const szarik = {
//     children: ['fafik','żaba'],
//     showChildren: function() {
//         this.children.forEach(function(child,index) {
//             console.log(this.children[index]);
//         })
//     },
// }

// szarik.showChildren();


//Rozwiązanie I

// that = this

// const szarik = {
//     children: ['fafik','żaba'],
//     showChildren: function() {
//         const that = this;
//         this.children.forEach(function(child,index) {
//             console.log(that.children[index]);
//         })
//     },
// }

// szarik.showChildren();

// Rozwiązanie II
// Bez funkcji - za pomocą pętli for of

// const szarik = {
//     children: ['fafik','żaba'],
//     showChildren: function() {
//         const that = this;
//         for(child of this.children) {
//             console.log(child);
//         }
//     }
// }

// szarik.showChildren();

// Rozwiązanie III
// arrow function

// const szarik = {
//     children: ['fafik','żaba'],
//     showChildren: function() {
//         const that = this;
//         this.children.forEach((child,index) => {
//             console.log(that.children[index]);
//         })
//     },
// }

// szarik.showChildren();


// Rozwiązanie IV
// bind

const szarik = {
    children: ['fafik','żaba'],
    showChildren: function() {
        const that = this;
        this.children.forEach(function(child,index) {
            console.log(that.children[index]);
        }.bind(this))
    },
}

szarik.showChildren();


