new Vue({
    el: '#estimate',
    data: function() {
        return {
            items: [],
            isValid: true,
            showDescription: false,
            copyResultMessage: '',
            importByPlainTextMode: false,
        }
    },
    methods: {
        createItem: function (){
            let title = document.querySelector('#title');
            let from = document.querySelector('#from');
            let to = document.querySelector('#to');
            let description = document.querySelector('#description');

            let descriptionValue = "";
            let descriptionShow = false;

            if (this['showDescription'] && description.value) {
                descriptionValue = description.value;
                descriptionShow = true; 
            }

            from.value = (from.value)?from.value:0
            to.value = (to.value)?to.value:0;

            let obj = { 
                'title': title.value,
                'from': from.value,
                'to': to.value,
                'description': descriptionValue,
                'isValid': true,
                'showDescription': descriptionShow,
                'isExclude': false,
            };
            if (obj.title) {
                this['items'].push(obj);
                this['isValid'] = true;
                title.value = "";
                from.value = 0;
                to.value = 0;
                description.value = "";
            } else {
                this['isValid'] = false;
            }
            title.focus();
        },

        removeItem: function (index){
            this['items'].splice(index, 1);
        },

        sum: function (prop) {
            var total = 0;
            for ( var i = 0, _len = this['items'].length; i < _len; i++ ) {
                if (this['items'][i]['isExclude'] === false) {
                    total += parseInt(this['items'][i][prop]);
                }
            }
            return total;
        },

        copyResult: function(){
            let result = "";
            let number = 0;
            for (let index = 0; index < this['items'].length; index++) {
                const element = this['items'][index];
                if (!element['isExclude']) {
                    number++;
                    result += number + '. ';
                    result += element['title'] + '\n';
                    if (element['description']) {
                        result += element['description']+ '\n';
                    }
                    result += element['from'] + ' - ' + element['to'] + ' часов \n';
                    result += '\n';
                }
            }
            result += '\n';
            result += 'Итого по оценке: ' + this.sum('from') + ' - ' + this.sum('to') + ' часов';
            
            navigator.clipboard.writeText(result);

            this['copyResultMessage'] = 'Результат скопирован в буфер обмена';
            setTimeout(function(scope){
                console.log(scope);
                scope['copyResultMessage'] = '';
            }, 3000, this);
        },

        deleteResult: function(){
            if(confirm('Действительно хотите очистить данные?')){
                    this['items'] = [];
            }
        },

        importByPlainText: function(){
            let textarea = document.querySelector('#idImportByPlainText');
            let array = textarea.value.split(/\r?\n/);
            for (let index = 0; index < array.length; index++) {
                array[index] = array[index].trim();
                if (array[index] != '') {
                    let obj = { 
                        'title': array[index],
                        'from': 0,
                        'to': 0,
                        'description': '',
                        'isValid': true,
                        'showDescription': false,
                        'isExclude': false,
                    };
                    this['items'].push(obj);

                }
            }
            textarea.value = '';
            this['importByPlainTextMode'] = false;
        },

    }

})