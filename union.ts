function getId(id: number | string) {
   if(typeof id === 'string'){
    id.toLowerCase()
    }
    if(typeof id === 'number'){
        id.toFixed()
    }
}
//array
const data: number[] = [1, 2, 3, 4, 5]
const data2: string[] = ['1', '2', '3', '4', '5']
const data3: string | number[] = [1, 2, 3, 4, 5, 4]

