#include <iostream>
using namespace std;

int main(){
    int input_length, i, j;
    int counter = 0;

    cout<<"How many numbers are you going to enter?\n"<<endl;
    cin>>input_length;

    int temp;
    int numbers_list[input_length];
    int duplicate_list[input_length] = {NULL};
    int count_list[input_length];

    for (i=0; i<input_length; i++){
        cout<<"Enter a new number"<<endl;
        cin>>temp;

        numbers_list[i] = temp;
    }

    cout<<"----------\n";
//    <<"Number\tCount\n"

    for (i=0; i<input_length; i++){
        for (j=i+1; j<input_length; j++){
            if (numbers_list[i] == numbers_list[j]){
                counter++;
            }
            if (counter >= 1)
                duplicate_list[i] = numbers_list[i];
        }
        count_list[i] = counter;
        counter = 0;
    }

    for (i=0; i<(sizeof(duplicate_list)/sizeof(duplicate_list[0])); i++){
        cout<<duplicate_list[i]<<endl;
    }

    return 0;
}
