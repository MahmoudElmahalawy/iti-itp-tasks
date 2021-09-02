#include <iostream>
using namespace std;

int main(){
    int input_length1, input_length2;
    int i = 0, j = 0, k = 0;
    int temp;

    cout<<"How many numbers are you going to enter for the first array?\n"<<endl;
    cin>>input_length1;

    int numbers_list1[input_length1];

    for (i=0; i<input_length1; i++){
        cout<<"Enter a new number"<<endl;
        cin>>temp;

        numbers_list1[i] = temp;
    }

    cout<<"How many numbers are you going to enter for the second array?\n"<<endl;
    cin>>input_length2;


    int numbers_list2[input_length2];

    for (i=0; i<input_length2; i++){
        cout<<"Enter a new number"<<endl;
        cin>>temp;

        numbers_list2[i] = temp;
    }

    int merged_list[input_length1+input_length2];

     while (i<input_length1 && j <input_length2)
    {
        if (numbers_list1[i] < numbers_list2[j])
            merged_list[k++] = numbers_list1[i++];
        else
            merged_list[k++] = numbers_list2[j++];
    }

    while (i < input_length1)
        merged_list[k++] = numbers_list1[i++];

    while (j < input_length2)
        merged_list[k++] = numbers_list2[j++];

    cout<<"----------\n";

    for (i=0; i < input_length1+input_length2; i++)
        cout << merged_list[i] << " ";

    return 0;
}

