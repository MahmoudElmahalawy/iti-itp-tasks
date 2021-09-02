#include <iostream>
using namespace std;

int main()
{
    float grade;

    cout<<"\nEnter your grade: "<< endl;
    cin>>grade;

    if (grade < 50) {
        cout<<"\nFail"<< endl;
    }else if (grade >= 50 && grade < 65) {
        cout<<"\nPass"<< endl;
    }else if (grade >= 65 && grade < 80) {
        cout<<"\nGood"<< endl;
    }else if (grade >= 80 && grade < 90) {
        cout<<"\nVery Good"<< endl;
    }else{
        cout<<"\nExcellent"<< endl;
    }


    return 0;
}
