import * as FileInput from './inputProcessors/File';
import * as SqlInput from './inputProcessors/Sql';
import * as FilePatternInput from './inputProcessors/FilePattern';
import * as DirectoryInput from './inputProcessors/Directory';
import * as JsonTransform from './transformProcessors/Json';
import * as CsvToJsonTransform from './transformProcessors/CsvToJson';
import * as JsonToCsvTransform from './transformProcessors/JsonToCsv';
import * as JsonArrayTransform from './transformProcessors/JsonArray';
import * as LogTransform from './transformProcessors/Log';
import * as FilterTransform from './transformProcessors/Filter';
import * as MapTransform from './transformProcessors/Map';
import * as ReduceTransform from './transformProcessors/Reduce';
import * as GroupByTransform from './transformProcessors/GroupBy';
import * as PickTransform from './transformProcessors/Pick';
import * as OmitTransform from './transformProcessors/Omit';
import * as PickByTransform from './transformProcessors/PickBy';
import * as OmitByTransform from './transformProcessors/OmitBy';
import * as ValuesTransform from './transformProcessors/Values';
import * as KeysTransform from './transformProcessors/Keys';
import * as ExtMap from './transformProcessors/ExtMap';
import * as HttpRequestOutput from './outputProcessors/HttpRequest';
import * as HumaneIndexerUpsert from './outputProcessors/HumaneIndexerUpsert';
import * as HumaneIndexerMerge from './outputProcessors/HumaneIndexerMerge';
import * as HumaneIndexerSignal from './outputProcessors/HumaneIndexerSignal';
import * as FileOutput from './outputProcessors/File';
import * as S3Output from './outputProcessors/S3';
// import * as JsonFileOutput from './outputProcessors/JsonFile';
import * as StdOutput from './outputProcessors/StdOut';

export default new (class {

    constructor() {
        this._outputPipelines = {
            file: FileOutput,
            s3: S3Output,
            // jsonFile: JsonFileOutput,
            stdout: StdOutput,
            http: HttpRequestOutput,
            humaneIndexUpsert: HumaneIndexerUpsert,
            humaneIndexMerge: HumaneIndexerMerge,
            humaneIndexSignal: HumaneIndexerSignal
        };
        this._inputPipelines = {
            file: FileInput,
            sql: SqlInput,
            filePattern: FilePatternInput,
            directory: DirectoryInput
        };
        this._transformPipelines = {
            json: JsonTransform,
            csvToJSON: CsvToJsonTransform,
            jsonToCSV: JsonToCsvTransform,
            jsonArray: JsonArrayTransform,
            log: LogTransform,
            filter: FilterTransform,
            map: MapTransform,
            reduce: ReduceTransform,
            groupBy: GroupByTransform,
            pick: PickTransform,
            omit: OmitTransform,
            omitBy: OmitByTransform,
            pickBy: PickByTransform,
            values: ValuesTransform,
            keys: KeysTransform,
            extMap: ExtMap
        };
    }

    outputPipelines() {
        return this._outputPipelines;
    }

    inputPipelines() {
        return this._inputPipelines;
    }

    transformPipelines() {
        return this._transformPipelines;
    }

    // registerOutputPipeline(pipeline) {
    //     this._outputPipelines.push(pipeline);
    // }
    //
    // registerInputPipeline(pipeline) {
    //     this._inputPipelines.push(pipeline);
    // }
    //
    // registerTransformPipeline(pipeline) {
    //     this._transformPipelines.push(pipeline);
    // }

})();

