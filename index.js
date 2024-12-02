import { encode, decode } from '@msgpack/msgpack';
import { performance } from 'perf_hooks';

const generateLargeObject = (size) => {
  const obj = {};
  for (let i = 0; i < size; i++) {
    obj[`key${i}`] = `value${i}`;
  }
  return obj;
};

const measurePerformanceAndSize = (label, serializeFunc, deserializeFunc, data) => {
  console.log(`\n--- ${label} ---`);

  // Measure serialization
  const serializeStart = performance.now();
  const serialized = serializeFunc(data);
  const serializeEnd = performance.now();
  const serializedSize =
    serialized instanceof Uint8Array
      ? serialized.length
      : Buffer.byteLength(serialized, 'utf8');

  console.log(`Serialization Time: ${(serializeEnd - serializeStart).toFixed(2)} ms`);
  console.log(`Serialized Size: ${serializedSize} bytes`);

  // Measure deserialization
  const deserializeStart = performance.now();
  deserializeFunc(serialized);
  const deserializeEnd = performance.now();

  console.log(`Deserialization Time: ${(deserializeEnd - deserializeStart).toFixed(2)} ms`);
};

const runPerformanceTest = () => {
  console.log("Generating large object...");
  const largeObject = generateLargeObject(100000); // Adjust size as needed
  console.log("Large object generated.");

  console.log("\n--- Performance Comparison ---");

  // JSON tests
  measurePerformanceAndSize(
    "JSON",
    (data) => JSON.stringify(data),
    (data) => JSON.parse(data),
    largeObject
  );

  // MessagePack tests
  measurePerformanceAndSize(
    "@msgpack/msgpack",
    (data) => encode(data),
    (data) => decode(data),
    largeObject
  );
};

runPerformanceTest();
