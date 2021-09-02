#include <iostream>
using namespace std;

int main(){
    int *pointer = NULL;
    int input_length, i, min_num;

    cout<<"How many numbers are you going to enter?\n"<<endl;
    cin>>input_length;

    pointer = new int[input_length];

    int temp;
    int numbers_list[input_length];

    for (i=0; i<input_length; i++){
        cout<<"Enter a new number"<<endl;
        cin>>temp;

        *(pointer+i) = temp;
        numbers_list[i] = *(pointer+i);
    }

    cout<<"----------\n";

    min_num = numbers_list[0];

    for (i=0; i<input_length; i++){
        if (numbers_list[0] > numbers_list[i]){
            if (numbers_list[i] < min_num){
                min_num = numbers_list[i];
            }
        }
    }

    for (i=0; i<input_length; i++){
        cout<<"numbers_list["<<i<<"] = "<<numbers_list[i]<<endl;
    }

    cout<<"----------\n"<<"Minimum number is "<<min_num<<endl;

    return 0;
}
