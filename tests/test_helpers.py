import unittest
from src.utils.helpers import validate_input, format_text

class TestHelpers(unittest.TestCase):
    def test_validate_input(self):
        self.assertTrue(validate_input("teste"))
        self.assertFalse(validate_input(""))
        
    def test_format_text(self):
        self.assertEqual(format_text("olá mundo"), "Olá Mundo")

if __name__ == '__main__':
    unittest.main() 