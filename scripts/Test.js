class Test{
    constructor(exercises){
        this.exercises = exercises  //массив вопросов
        this.isFinish = false;  //завершен ли тест?
        this.sumMark = 0;
    }
    getMark(){
        for(let ex of this.exercises){
            let flag = true;
            if(ex.typeAnswer == TYPE.CheckBox){
                flag = ex.inputAnsewer.length == 0 ? false : true;
                for(let i = 0; i < ex.inputAnsewer.length; i++){
                    if(ex.correctAnswer.indexOf(ex.inputAnsewer[i]) == -1) flag = false;
                }
            }
            else{
                flag = ex.inputAnsewer == ex.correctAnswer;
            }
            if(flag) this.sumMark++;
        }
        return this.sumMark;
    }
}