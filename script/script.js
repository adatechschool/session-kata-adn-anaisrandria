// const fs = require("fs");
// const filePath = "script/adn.txt";

// fs.readFile(filePath, "utf8", (err, data) => {
// 	if (err) {
// 		console.error("Error reading file:", err);
// 		return;
// 	}

// 	const adnStr = data;
// 	// console.log("🍐 adnStr is:", adnStr);
// 	return adnStr;
// });

const codonsToProteins = {
	ATA: "I",
	ATC: "I",
	ATT: "I",
	ATG: "M",
	ACA: "T",
	ACC: "T",
	ACG: "T",
	ACT: "T",
	AAC: "N",
	AAT: "N",
	AAA: "K",
	AAG: "K",
	AGC: "S",
	AGT: "S",
	AGA: "R",
	AGG: "R",
	CTA: "L",
	CTC: "L",
	CTG: "L",
	CTT: "L",
	CCA: "P",
	CCC: "P",
	CCG: "P",
	CCT: "P",
	CAC: "H",
	CAT: "H",
	CAA: "Q",
	CAG: "Q",
	CGA: "R",
	CGC: "R",
	CGG: "R",
	CGT: "R",
	GTA: "V",
	GTC: "V",
	GTG: "V",
	GTT: "V",
	GCA: "A",
	GCC: "A",
	GCG: "A",
	GCT: "A",
	GAC: "D",
	GAT: "D",
	GAA: "E",
	GAG: "E",
	GGA: "G",
	GGC: "G",
	GGG: "G",
	GGT: "G",
	TCA: "S",
	TCC: "S",
	TCG: "S",
	TCT: "S",
	TTC: "F",
	TTT: "F",
	TTA: "L",
	TTG: "L",
	TAC: "Y",
	TAT: "Y",
	TAA: "_",
	TAG: "_",
	TGC: "C",
	TGT: "C",
	TGA: "_",
	TGG: "W",
};

let adnStr = "CTCTTGAACACTAGTTATCGAGCCAAATACCGATAGGTGCTTCTTTTGCGAGAA";

let adnArr = adnStr.split("");
let codons = [];

// --------- PARTIE 1 - ETAPE 1 : on découpe et on regroupe les éléments en codons (séquences de 3 nucléotides) --------- //
function getCodons(adn) {
	for (let i = 0; i < adn.length; i++) {
		seq = adn.splice(0, 3).join("");
		console.log("🥑 seq is:", seq);
		console.log("🦄 adn is:", adn);
		codons.push(seq);
		console.log("🐸 arr is:", codons);
	}

	for (let i = 0; i < codons.length; i++) {
		console.log(codons[i]);
	}
	return codons;
}
getCodons(adnArr); // [CTC, TTG, AAC, ACT, AGT, TAT, CGA, GCC, AAA, TAC, CGA, TAG, GTG, CTT, CTT, (TTG?, CGA?, GAA?)]

// --------- PARTIE 1 - ETAPE 2 : on convertit chaque élément (codon) en protéine, puis on convertit la séquence de codons en protéines--------- //
function convertElementToProtein(codon) {
	let protein = codonsToProteins[codon];
	return protein;
}

function convertToProteins(arr) {
	let res = "";

	for (let i = 0; i < arr.length; i++) {
		let protein = convertElementToProtein(arr[i]);

		convertElementToProtein(arr[i]);
		res += protein;
	}
	console.log("res is:", res);
}

convertToProteins(codons);
