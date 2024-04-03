/**
 ******************************************************************************
 * @file           : main.c
 * @author         : Auto-generated by STM32CubeIDE
 * @brief          : Main program body
 ******************************************************************************
 * @attention
 *
 * Copyright (c) 2024 STMicroelectronics.
 * All rights reserved.
 *
 * This software is licensed under terms that can be found in the LICENSE file
 * in the root directory of this software component.
 * If no LICENSE file comes with this software, it is provided AS-IS.
 *
 ******************************************************************************
 */

#include <lis3dsh.h>
#include <stdint.h>
#include <stdio.h>
#include "stm32f4xx.h"
#include "system_stm32f4xx.h"
#include "i2c_lcd.h"
#include "uart.h"

#if !defined(__SOFT_FP__) && defined(__ARM_FP)
  #warning "FPU is not initialized, but the project is compiling for an FPU. Please initialize the FPU before use."
#endif

int main(void)
{
	char str[32];
	int ret;
	LIS_Data val;
	SystemInit();
	UartInit(BAUD_9600);
	UartPuts("LIS3DSH Accel Demo!\r\n");
	LIS_Init();
	LcdInit();
	DelayMs(1000);
	while(1) {
		ret = LIS_DRdy();
		if(ret) {
			val = LIS_GetData();
			sprintf(str, "X=%d, Y=%d\r\n", val.x, val.y);
			LcdPuts(LCD_LINE1,str);
			sprintf(str, "Z=%d\r\n",val.z);
			LcdPuts(LCD_LINE2,str);
			DelayMs(1000);
		}
	}
	return 0;
}
