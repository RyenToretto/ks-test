// Generated by dts-bundle-generator v7.2.0

export interface XhReport {
	[key: string]: any;
	init: () => void;
	(key: string, ext?: Record<string, any>, onlyOnce?: boolean): Promise<any>;
}
declare const createXhReport: (payload: any) => XhReport;

export {
	createXhReport as default,
};

export {};
