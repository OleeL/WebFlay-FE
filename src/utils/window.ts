import router from 'next/router';
import { useMemo } from 'react';

export class BulokeWindow {
	public static isBrowser = () => typeof window !== 'undefined';

	public static nextOpen = (
		url?: string | URL,
		target?: string,
		features?: string,
	): WindowProxy | null => {
		if (BulokeWindow.isBrowser()) {
			return window.open(url, target, features);
		}
		return null;
	};

	public static redirect = (url: string) => router.push(url);

	public static getUrlSearchParams = (key?: string) => {
		return useMemo(() => {
			if (BulokeWindow.isBrowser()) {
				if (key) {
					return new URLSearchParams(window.location.search).get(key);
				}
				return new URLSearchParams(window.location.search);
			}
			return '';
		}, [key]);
	};

	public static setCookie = (key: string, value: string) => {
		localStorage.setItem(key, JSON.stringify({ value }));
	};

	public static setCookieWithExpiry(key: string, value: any, ttl: number) {
		localStorage.setItem(
			key,
			JSON.stringify({
				value,
				expiry: new Date().getTime() + ttl * 1000,
			}),
		);
	}

	public static getCookie<T>(key: string): T | null {
		const itemStr = localStorage.getItem(key);
		if (!itemStr) {
			return null;
		}
		const item = (() => {
			try {
				return JSON.parse(itemStr);
			} catch (error) {
				return null;
			}
		})();
		if (!item) return null;

		const now = new Date();
		if (item?.expiry && item.expiry < now.getTime()) {
			localStorage.removeItem(key);
			return null;
		}
		return item.value;
	}
}
