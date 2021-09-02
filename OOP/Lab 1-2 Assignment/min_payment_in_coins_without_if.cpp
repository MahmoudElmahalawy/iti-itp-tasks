#include<iostream>
using namespace std;

int main(){
float amount, amount_in_coins;
int coin_50, coin_25, coin_10, coin_05, coin_01;

cout<<"Enter money amount in cash"<<endl;
cin>>amount;

amount_in_coins=amount*100;

coin_50 = amount_in_coins / 50;
coin_25 = (amount_in_coins - (coin_50 * 50)) / 25;
coin_10 = (amount_in_coins - (coin_50 * 50) - (coin_25 * 25)) / 10;
coin_05 = (amount_in_coins - (coin_50 * 50) - (coin_25 * 25) - (coin_10 * 10)) / 5;
coin_01 = amount_in_coins - (coin_50 * 50) - (coin_25 * 25) - (coin_10 * 10) - (coin_05 * 5);

cout<<"You will pay "<<coin_50<<" coins in 50"<<endl;
cout<<"You will pay "<<coin_25<<" coins in 25"<<endl;
cout<<"You will pay "<<coin_10<<" coins in 10"<<endl;
cout<<"You will pay "<<coin_05<<" coins in 5"<<endl;
cout<<"You will pay "<<coin_01<<" coins in 1"<<endl;

return 0; }

