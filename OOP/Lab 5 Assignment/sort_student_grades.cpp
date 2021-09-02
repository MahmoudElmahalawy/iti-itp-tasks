#include <iostream>
using namespace std;

typedef struct stu_data{
    int code;
    string name;
    int marks[5];
    int total;
} student;

int main(){
    int size, i, j, sum;
    student arr[100];
    student temp;


    //Entering number of students
    cout<<"Number of students: ";
    cin>>size;

    for (i=0; i<size; i++){
        arr[i].code = i + 1;
        cout<<"Student No."<<arr[i].code<<endl;
        cout<<"Name: ";
        cin>>arr[i].name;

        fflush(stdin);
        sum =0;

        for (j=0; j<5; j++){
            cout << "Mark["<<j+1<<"]:";
            cin >> arr[i].marks[j];
            fflush(stdin);
            sum = sum + arr[i].marks[j];
        }

        arr[i].total = sum;
    }

    //Sorting students
    for (i=0; i<size-1; i++){
        for (j=i+1; j<size; j++){
            if (arr[i].total < arr[j].total){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    //Printing result
    for (i=0;i<size;i++)
        cout<<i+1<<" ==> "<<"Student code: "<<arr[i].code<< " : \t"<<arr[i].name<<"\t|\tTotal Marks: "<<arr[i].total<<endl;
}

