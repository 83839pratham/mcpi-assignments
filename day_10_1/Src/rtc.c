/*
 * rtc.c
 *
 *  Created on: Apr 4, 2024
 *      Author: pratham
 */

#include "rtc.h"

uint16_t Bin2Bcd(uint16_t val) {
	uint16_t unit = val % 10;
	uint16_t tens = (val / 10) % 10;
//	uint16_t hundreds = (val / 100) % 10;
//	uint16_t thousands = (val / 1000) % 10;
	uint16_t res = 0;
	res |= unit;
	res |= tens << 4;
//	res |= hundreds << 8;
//	res |= thousands << 12;
	return res;
}

uint16_t Bcd2Bin(uint16_t val) {
	uint16_t unit = (val & 0x0F);
	uint16_t tens = ((val >> 4) & 0x0F) * 10;
//	uint16_t hundreds = ((val >> 8) & 0x0F) * 100;
//	uint16_t thousands = ((val >> 12) & 0x0F) * 1000;
	uint16_t res = 0;
	res += unit;
	res += tens;
//	res += hundreds;
//	res += thousands;
	return res;
}

void RTC_Init(RTC_Date *dt,RTC_Time *tm){
	RCC->APB1ENR |= RCC_APB1ENR_PWREN;//PERIPHERAL CLOCK POWER IS ENABLED HERE
	PWR->CR |= PWR_CR_DBP; //TO PLAY WITH REGISTERS WE DO THIS STEP

	RCC->CSR |= RCC_CSR_LSION;//ENABLE LSI
	while(!(RCC->CSR&RCC_CSR_LSIRDY));//WAIT FOR LSI READY FLAG

	RCC->BDCR |=RCC_BDCR_RTCEN | RCC_BDCR_RTCSEL_1;
	RTC->WPR = 0xCA;
	RTC->WPR = 0x53;

	RTC->ISR |= RTC_ISR_INIT;//enable rtc setup
	while(!(RTC->ISR & RTC_ISR_INITF));//wait until register update is allowed

	RTC->PRER = ((128-1)<<RTC_PRER_PREDIV_A_Pos)|((250-1)<<RTC_PRER_PREDIV_S_Pos);
	RTC_SetDate(dt);
	RTC_SetTime(tm);

	RTC->CR |= RTC_CR_BYPSHAD;//doubt
	RTC->ISR &= ~RTC_ISR_INIT;
	PWR->CR &= ~PWR_CR_DBP;
}
void RTC_SetTime(RTC_Time *tm){
	uint8_t hrs = Bin2Bcd(tm->Hours);
	uint8_t min = Bin2Bcd(tm->Minutes);
	uint8_t sec = Bin2Bcd(tm->Seconds);
	uint32_t tr = 0;
		tr |= hrs << RTC_TR_HU_Pos;
		tr |= min << RTC_TR_MNU_Pos;
		tr |= sec << RTC_TR_SU_Pos;
		tr &= ~RTC_TR_PM;
		RTC->TR = tr;
	}
void RTC_SetDate(RTC_Date *dt) {
	uint8_t date = Bin2Bcd(dt->Date);
	uint8_t month = Bin2Bcd(dt->Month);
	uint8_t year = Bin2Bcd(dt->Year);
	uint8_t weekday = Bin2Bcd(dt->WeekDay);
	uint32_t dr = 0;
	dr |= year << RTC_DR_YU_Pos;
	dr |= weekday << RTC_DR_WDU_Pos;
	dr |= month << RTC_DR_MU_Pos;
	dr |= date << RTC_DR_DU_Pos;
	RTC->DR = dr;
}
void RTC_GetDate(RTC_Date *dt) {
	uint32_t dr = RTC->DR;
	uint8_t val = (dr & (RTC_DR_DT_Msk | RTC_DR_DU_Msk)) >> RTC_DR_DU_Pos;
	dt->Date = Bcd2Bin(val);
	val = (dr & (RTC_DR_MT_Msk | RTC_DR_MU_Msk)) >> RTC_DR_MU_Pos;
	dt->Month = Bcd2Bin(val);
	val = (dr & (RTC_DR_YT_Msk | RTC_DR_YU_Msk)) >> RTC_DR_YU_Pos;
	dt->Year = Bcd2Bin(val);
	val = (dr & (RTC_DR_WDU_Msk)) >> RTC_DR_WDU_Pos;
	dt->WeekDay = Bcd2Bin(val);
}

void RTC_GetTime(RTC_Time *tm) {
	uint32_t tr = RTC->TR;
	uint8_t val = (tr & (RTC_TR_HT_Msk | RTC_TR_HU_Msk)) >> RTC_TR_HU_Pos;
	tm->Hours = Bcd2Bin(val);
	val = (tr & (RTC_TR_MNT_Msk | RTC_TR_MNU_Msk)) >> RTC_TR_MNU_Pos;
	tm->Minutes = Bcd2Bin(val);
	val = (tr & (RTC_TR_ST_Msk | RTC_TR_SU_Msk)) >> RTC_TR_SU_Pos;
	tm->Seconds = Bcd2Bin(val);
}



