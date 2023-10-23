import Vue from 'vue';
declare const _default: import("vue/types/vue").ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, unknown, unknown, unknown, Record<never, any>, {}, import("vue/types/vue").ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, {
    fileRecords: import("../lib/file-record").default[];
    rawFileRecords: import("../lib/file-record").RawFileRecord[];
    isDragging: boolean;
    isSorting: boolean;
    isSortingActive: boolean;
    transitionDuration: number;
    overallProgress: number;
    uniqueId: string;
    sortTimeout: number;
}, {
    createThumbnail(fileRecord: import("../lib/file-record").default, video: HTMLVideoElement): Promise<void>;
    initVideo(fileRecord: import("../lib/file-record").default): void;
    getFileRecordOrRawInstance(fileRecordOrRaw: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord, raw: boolean): import("../lib/file-record").default | import("../lib/file-record").RawFileRecord;
    getFileRecordRawInstance(fileRecordOrRaw: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord): import("../lib/file-record").RawFileRecord;
    getFileRecordInstance(fileRecordOrRaw: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord): import("../lib/file-record").default;
    prepareConfigureFn(configureXhr?: import("../lib/ajax-request").ConfigureFn | undefined): import("../lib/ajax-request").ConfigureFn | undefined;
    upload(url: string, headers: object, fileRecordsOrRaw: import("../lib/file-record").default[] | import("../lib/file-record").RawFileRecord[], createFormData?: ((fileRecord: import("../lib/file-record").default) => FormData) | undefined, configureXhr?: import("../lib/ajax-request").ConfigureFn | undefined): Promise<any>;
    deleteUpload(url: string, headers: object, fileRecordOrRaw: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord, uploadData?: any, configureXhr?: import("../lib/ajax-request").ConfigureFn | undefined): Promise<any>;
    updateUpload(url: string, headers: object, fileRecord: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord, uploadData?: any, configureXhr?: import("../lib/ajax-request").ConfigureFn | undefined): Promise<any>;
    autoUpload(fileRecords: import("../lib/file-record").default[] | import("../lib/file-record").RawFileRecord[]): Promise<any>;
    autoDeleteUpload(fileRecord: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord): Promise<any>;
    autoUpdateUpload(fileRecord: import("../lib/file-record").default): Promise<any>;
    equalFiles(file1: File, file2: File): boolean;
    isFileAddedAlready(file: File): boolean;
    handleFiles(files: File[] | FileList): void;
    filesChanged(event: InputEvent): void;
    drop(event: DragEvent): void;
    dragEnter(event: DragEvent): void;
    dragOver(event: DragEvent): void;
    dragLeave(event: DragEvent): void;
    removeFileRecord(fileRecordOrRaw: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord): void;
    deleteFileRecord(fileRecordOrRaw: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord): void;
    filenameChanged(fileRecord: import("../lib/file-record").default): void;
    checkValue(): void;
    sortStart(): void;
    sortEnd(sortData: {
        event: Event;
        newIndex: number;
        oldIndex: number;
        collection: any;
    }): void;
}, {
    withCredentials: boolean | undefined;
    canAddMore: boolean;
    helpTextComputed: string;
    isDeletable: boolean;
    isSortable: boolean;
    hasMultiple: boolean;
    shouldRead: boolean;
}, Record<"accept" | "auto" | "averageColor" | "capture" | "compact" | "deletable" | "disabled" | "editable" | "errorText" | "helpText" | "linkable" | "maxFiles" | "maxSize" | "meta" | "multiple" | "progress" | "read" | "readonly" | "resumable" | "sortable" | "theme" | "thumbnailSize" | "uploadConfig" | "uploadHeaders" | "uploadUrl" | "uploadWithCredentials" | "value", any>, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin>, import("vue/types/v3-component-options").ComponentOptionsMixin>;
export default _default;
