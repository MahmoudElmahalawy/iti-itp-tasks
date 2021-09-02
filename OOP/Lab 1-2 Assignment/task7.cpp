#include<iostream>
using namespace std;

void convert(int value)
{

    char *first[20] = {"ZERO", "ONE", "TWO", "THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","ELEVEN","TWELVE","THIRTEEN","FOURTEEN","FIFTEEN","SIXTEEN","SEVENTEEN","EIGHTTEEN","NINETEEN"};

    char *second[10] = {"", "TEN", "TWENTY", "THIRTY","FORTY","FIFTY","SIXTY","SEVENTY","EIGHTY","NINETY"};

    if(value > 99)
    {
        cout<<"ENTER A NUMBER BETWEEN 0 AND 99";
    }
    if(value >= 20 && value < 100)
    {
        cout << second[value / 10];
        if(value % 10)
        {
            cout << " ";
            convert(value % 10);
        }
    }
    else if(value < 20)
    {
        cout<<first[value];
    }
    return;

}

int main()
{
    int number;
    cout<<"Enter a number : ";
    cin>>number;
    convert(number);
    return 0;
}
