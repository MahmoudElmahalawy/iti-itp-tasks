#include <iostream>
using namespace std;

int pow(int n, int p);

int main(){
    cout<<pow(6, 5);

    return 0;
}

int pow(int n, int p){

    if (p != 0)
        return (n*pow(n, p-1));
    else
        return 1;
}
