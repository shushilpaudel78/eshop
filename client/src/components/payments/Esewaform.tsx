'use client';

type Props = {
    amount: number;
    productId: string;
};

export default function EsewaForm({ amount, productId }: Props) {
    const submitToEsewa = () => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://uat.esewa.com.np/epay/main'; // ✅ UAT (Test) URL

        const fields = {
            amt: amount.toString(),
            psc: '0', // service charge
            pdc: '0', // delivery charge
            txAmt: '0', // tax
            tAmt: amount.toString(), // total
            pid: productId, // your product/order ID
            scd: 'EPAYTEST', // your merchant code (UAT: EPAYTEST)
            su: 'http://localhost:3000/success', // ✅ success URL
            fu: 'http://localhost:3000/failure', // ✅ failure URL
        };

        Object.entries(fields).forEach(([key, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
    };

    return (
        <div className="">
            <button
                onClick={submitToEsewa}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
            >
                Pay with eSewa
            </button>
        </div>
    );
}
