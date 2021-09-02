#include <iostream>
using namespace std;

int countCoins(int n)
{
    int c = 0;

    if (n < 5) {
        return n;
    }
    if (n > 4 && n < 10) {
        c = n / 5 + n % 5;
        return c;
    }

    if (n > 9 && n < 25) {
        c = n / 10;

        if (n % 10 < 5) {
            c = c + n % 10;
            return c;
        }

        if (n % 10 > 4) {
            c = c + (n % 10) / 5 + (n % 10) % 5;
            return c;
        }
    }

    if (n > 24 && n < 50) {
        c = n / 25;

        if (n % 25 < 5) {
            c = c + n % 25;
            return c;
        }


        if (n % 25 > 4 && n % 25 < 10) {
            c = c + ((n % 25) / 5) + ((n % 25) % 5);
        }

        if (n % 25 > 9) {
            c = c + (n % 25) / 10 + (n % 10) % 5;
        }

        return c;

    }

    if (n >= 50) {
        c = n / 50;

        if (n % 50 < 5) {
            c = c + n % 50;
            return c;
        }


        if (n % 50 > 4 && n % 50 < 10) {
            c = c + ((n % 50) / 5) + ((n % 50) % 5);
        }

        if (n % 50 > 9 && n % 50 < 25) {
            c = c + (n % 50) / 10 + (n % 10) % 5;
        }

        if (n % 50 > 24) {
            c = c + (n % 50) / 25 + (n % 10) % 5;
        }

        return c;

    }

}

int main()
{
    int n;

    cout<<"\nEnter the amount to be paid:"<<endl;
    cin>>n;

    cout<<"\nMinimum number of coins required:"<< countCoins(n);

    return 0;
}
