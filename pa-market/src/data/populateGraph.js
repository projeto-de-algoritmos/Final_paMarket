import { Graph } from '../dataStructure/prim.js';

export function populateGraph() {
  const generateTime = () => {
    return Math.floor(Math.random() * 30);
  };

  const graph = new Graph();

  // Adição dos produtos
  graph.addNode('1');
  graph.addNode('2');
  graph.addNode('3');
  graph.addNode('4');
  graph.addNode('5');
  graph.addNode('6');
  graph.addNode('7');
  graph.addNode('8');
  graph.addNode('9');
  graph.addNode('10');
  graph.addNode('11');
  graph.addNode('12');
  graph.addNode('13');
  graph.addNode('14');
  graph.addNode('15');
  graph.addNode('16');
  graph.addNode('17');
  graph.addNode('18');
  graph.addNode('19');
  graph.addNode('20');
  graph.addNode('21');
  graph.addNode('22');
  graph.addNode('23');
  graph.addNode('24');
  graph.addNode('25');
  graph.addNode('26');
  graph.addNode('27');
  graph.addNode('28');
  graph.addNode('29');
  graph.addNode('30');
  graph.addNode('31');
  graph.addNode('32');
  graph.addNode('33');
  graph.addNode('34');
  graph.addNode('35');
  graph.addNode('36');
  graph.addNode('37');
  graph.addNode('38');
  graph.addNode('39');
  graph.addNode('40');
  graph.addNode('41');
  graph.addNode('42');
  graph.addNode('43');
  graph.addNode('44');
  graph.addNode('45');
  graph.addNode('46');
  graph.addNode('47');
  graph.addNode('48');
  graph.addNode('49');
  graph.addNode('50');
  graph.addNode('51');
  graph.addNode('52');

  // Adição da navegação entre os produtosy
  graph.addEdge('1', '2', generateTime());
  graph.addEdge('1', '3', generateTime());
  graph.addEdge('1', '4', generateTime());
  graph.addEdge('2', '3', generateTime());
  graph.addEdge('2', '4', generateTime());
  graph.addEdge('2', '5', generateTime());
  graph.addEdge('3', '4', generateTime());
  graph.addEdge('3', '5', generateTime());
  graph.addEdge('3', '6', generateTime());
  graph.addEdge('4', '5', generateTime());
  graph.addEdge('4', '6', generateTime());
  graph.addEdge('4', '7', generateTime());
  graph.addEdge('5', '6', generateTime());
  graph.addEdge('5', '7', generateTime());
  graph.addEdge('5', '8', generateTime());
  graph.addEdge('6', '1', generateTime());
  graph.addEdge('6', '2', generateTime());
  graph.addEdge('6', '7', generateTime());
  graph.addEdge('7', '2', generateTime());
  graph.addEdge('7', '1', generateTime());
  graph.addEdge('7', '3', generateTime());
  graph.addEdge('8', '12', generateTime());
  graph.addEdge('8', '22', generateTime());
  graph.addEdge('8', '20', generateTime());
  graph.addEdge('9', '20', generateTime());
  graph.addEdge('9', '12', generateTime());
  graph.addEdge('9', '2', generateTime());
  graph.addEdge('10', '2', generateTime());
  graph.addEdge('11', '10', generateTime());
  graph.addEdge('11', '9', generateTime());
  graph.addEdge('12', '2', generateTime());
  graph.addEdge('13', '1', generateTime());
  graph.addEdge('14', '3', generateTime());
  graph.addEdge('15', '4', generateTime());
  graph.addEdge('16', '6', generateTime());
  graph.addEdge('17', '7', generateTime());
  graph.addEdge('18', '8', generateTime());
  graph.addEdge('19', '8', generateTime());
  graph.addEdge('20', '2', generateTime());
  graph.addEdge('21', '1', generateTime());
  graph.addEdge('22', '1', generateTime());
  graph.addEdge('23', '22', generateTime());
  graph.addEdge('24', '22', generateTime());
  graph.addEdge('25', '12', generateTime());
  graph.addEdge('26', '12', generateTime());
  graph.addEdge('27', '13', generateTime());
  graph.addEdge('27', '16', generateTime());
  graph.addEdge('28', '17', generateTime());
  graph.addEdge('29', '18', generateTime());
  graph.addEdge('30', '19', generateTime());
  graph.addEdge('31', '50', generateTime());
  graph.addEdge('32', '52', generateTime());
  graph.addEdge('33', '51', generateTime());
  graph.addEdge('34', '32', generateTime());
  graph.addEdge('35', '33', generateTime());
  graph.addEdge('36', '34', generateTime());
  graph.addEdge('37', '34', generateTime());
  graph.addEdge('37', '32', generateTime());
  graph.addEdge('37', '32', generateTime());
  graph.addEdge('38', '12', generateTime());
  graph.addEdge('38', '11', generateTime());
  graph.addEdge('39', '2', generateTime());
  graph.addEdge('40', '1', generateTime());
  graph.addEdge('40', '4', generateTime());
  graph.addEdge('40', '5', generateTime());
  graph.addEdge('41', '6', generateTime());
  graph.addEdge('42', '7', generateTime());
  graph.addEdge('42', '8', generateTime());
  graph.addEdge('43', '9', generateTime());
  graph.addEdge('44', '45', generateTime());
  graph.addEdge('44', '46', generateTime());
  graph.addEdge('44', '47', generateTime());
  graph.addEdge('45', '46', generateTime());
  graph.addEdge('45', '47', generateTime());
  graph.addEdge('45', '48', generateTime());
  graph.addEdge('46', '49', generateTime());
  graph.addEdge('46', '47', generateTime());
  graph.addEdge('47', '48', generateTime());
  graph.addEdge('48', '49', generateTime());
  graph.addEdge('48', '50', generateTime());
  graph.addEdge('48', '16', generateTime());
  graph.addEdge('49', '50', generateTime());
  graph.addEdge('49', '51', generateTime());
  graph.addEdge('49', '52', generateTime());
  graph.addEdge('50', '51', generateTime());
  graph.addEdge('51', '52', generateTime());
  graph.addEdge('51', '1', generateTime());
  graph.addEdge('52', '25', generateTime());
  graph.addEdge('52', '26', generateTime());

  return graph;
}